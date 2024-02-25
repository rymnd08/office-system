import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { NavCardComponent } from '../../components/nav-card/nav-card.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { assessmentLevel } from '../../shared/assessmentLevel';
import { Land } from '../../shared/ILand.interface';
import { Classes } from '../../shared/ILand.interface';
import { agriLand, urbandLand } from '../../shared/data';

interface computedLand{
  land: string
  classType: string
  area: number
  fairmarketValue: string
  marketValue2003: number
  marketValue2011: number
  assessedValue2003: number
  assessedValue2011: number
}

interface formValue {
  land: number | string
  classType: number | string
  fairMarketValue: number | string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavComponent, NavCardComponent, RouterModule, ReactiveFormsModule,  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  //properties
  landForm!: FormGroup
  landData: Land[] = []
  agriLand: Land[] = []
  selectedClass: Classes[] = []
  assessmentLvl: assessmentLevel[] = [] 
  computedLand: computedLand[] = []

  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
    this.initializeForm()
    this.landData = urbandLand
    this.assessmentLvl = assessmentLevel
    this.agriLand = agriLand
  }

  //methods
  resetData(){
    this.initializeForm()
    this.computedLand = []
  }

  handleLandChange(){
    const landSelectValue = this.landForm.get('land')?.value

    const getClass = this.agriLand?.find(land => land.id == landSelectValue)?.classes 
    this.selectedClass = getClass as Classes[]
  }

  handleSubmit(){
    const formValue = this.landForm.value
    console.log(formValue)
    // area 
    const AREA = formValue.area

    // land 
    const selectedLand = this.agriLand.find(land => land.id == formValue.land)
    const land = selectedLand?.landName
    console.log(land)

    // class 
    const selectedClass = selectedLand?.classes.find(className => className.id == formValue.classType)
    const classType = selectedClass?.className
    const MARKET_VALUE_2003 = selectedClass?.marketValue2003
    const MARKET_VALUE_2011 = selectedClass?.marketValue2011

    //fair market value
    const selectedFairMarketValue = this.assessmentLvl.find(assLvl => assLvl.id == formValue.fairMarketValue)
    const fairMarketValue = selectedFairMarketValue?.name
    const ASSESSMENT_LVL_2003 = selectedFairMarketValue?.assessmentLevel2003
    const ASSESSMENT_LVL_2011 = selectedFairMarketValue?.assessmentLevel2011

    // computation
    if(MARKET_VALUE_2003 && MARKET_VALUE_2011 && ASSESSMENT_LVL_2003 && ASSESSMENT_LVL_2011){
      const marketValue2003 = AREA * MARKET_VALUE_2003
      const marketValue2011 = AREA * MARKET_VALUE_2011
      const assessedValue2003 = marketValue2003 * ASSESSMENT_LVL_2003
      const assessedValue2011 = marketValue2011 * ASSESSMENT_LVL_2011

      this.computedLand.push({land: land,classType: classType, area: AREA, fairmarketValue: fairMarketValue, marketValue2003, marketValue2011, assessedValue2003, assessedValue2011} as computedLand)
    }


    // form reset 
    this.initializeForm()
  }

  get totalMarketValue(){
    return this.computedLand.reduce((acc, val) => acc += val.marketValue2011, 0)
  }
  get totalAssessedValue(){
    return this.computedLand.reduce((acc, val) => acc += val.assessedValue2011, 0)
  }

  get totalPrevMarketValue(){
    return this.computedLand.reduce((acc, val) => acc += val.marketValue2003, 0)
  }
  get totalPrevAssessedValue(){
    return this.computedLand.reduce((acc, val) => acc += val.assessedValue2003, 0)
  }


  initializeForm(){
    this.landForm = this.fb.group({
      land: ['', Validators.required],
      classType: ['', Validators.required],
      fairMarketValue: ['', Validators.required],
      area: ['', Validators.required]
    })
  }

}
