import { Component, OnInit,  } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-computation',
  standalone: true,
  imports: [NavComponent, FormsModule],
  templateUrl: './computation.component.html',
  styleUrl: './computation.component.css'
})


export class ComputationComponent implements OnInit {

  

  ngOnInit(): void {
    
  }
}
