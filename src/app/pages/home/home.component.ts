import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { NavCardComponent } from '../../components/nav-card/nav-card.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { assessmentLevel } from '../../shared/assessmentLevel';
import { Classes, Land, LandData } from '../../shared/ILand.interface';
import { landData as data } from '../../shared/data';

interface computedLand{
  id: number,
  land: string
  classType: string
  area: number
  fairMarketValue: string
  marketValue2003: number
  marketValue2011: number
  assessedValue2003: number
  assessedValue2011: number
}

interface formValue {
  area: number
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
  landData: LandData[] = []
  selectedLandType!: LandData | null
  selectedLand: Land | null = null
  selectedClass: Classes | null = null


  assessmentLvl: assessmentLevel[] = [] 
  computedLand: computedLand[] = []
  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
    this.initializeForm()
    this.assessmentLvl = assessmentLevel
    this.landData = data

  }

  //methods
  resetData(){
    this.resetForm()
    this.computedLand = []
  }

  resetForm(){
    this.selectedLandType = null
    this.selectedLand = null
    this.selectedClass = null
    this.initializeForm()
  }

  handleLandTypeChange(event: Event){
    this.selectedLand = null

    const value = (event.target as HTMLSelectElement).value
    const selectedLandType = this.landData.find(land => land.id == value)
    this.selectedLandType = selectedLandType ? selectedLandType : null

  }

  handleLandChange(event: Event){
    if(this.selectedLandType){
      const selectedLand = this.selectedLandType.data.find(land => land.id == (event.target as HTMLSelectElement).value)
      this.selectedLand = selectedLand ? selectedLand : null
    }
  }
  
  handleClassChange(event: Event){
    if(this.selectedLand){
      const selectedClass = this.selectedLand.classes.find(_class => _class.id == (event.target as HTMLSelectElement).value)
      this.selectedClass = selectedClass ? selectedClass : null

      console.log(this.selectedClass)
    }
  }

  deleteLandRow(id: number){
    this.computedLand = this.computedLand.filter(land => land.id !== id)
  }

  handleSubmit(){

    const formValue = this.landForm.value as formValue
    console.log(formValue)
    const AREA = formValue.area
    const FMV = this.assessmentLvl.find(ass => ass.id == formValue.fairMarketValue)

    if(this.selectedLandType && this.selectedLand && this.selectedClass && FMV){
      const MV_2003 = this.selectedClass.marketValue2003
      const MV_2011 = this.selectedClass.marketValue2011
      
      const ASS_2003 = FMV.assessmentLevel2003
      const ASS_2011 = FMV.assessmentLevel2011

      const computed_mv_2003 = AREA * MV_2003
      const computed_mv_2011 = AREA * MV_2011

      const computed_av_2003 = computed_mv_2003 * ASS_2003
      const computed_av_2011 = computed_mv_2011 * ASS_2011

      this.computedLand.push(
        {
          id: Date.now(),
          land: this.selectedLand.landName, 
          classType: this.selectedClass.className, 
          area: AREA, 
          fairMarketValue: FMV.name, 
          marketValue2003: computed_mv_2003, 
          marketValue2011: computed_mv_2011, 
          assessedValue2003: computed_av_2003,
          assessedValue2011: computed_av_2011
        }
      )
      
    }

    // form reset 
    this.resetForm()
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
      landType: ['', Validators.required],
      land: ['', Validators.required],
      classType: ['', Validators.required],
      area: ['', Validators.required],
      fairMarketValue: ['', Validators.required],
    })
  }

}
