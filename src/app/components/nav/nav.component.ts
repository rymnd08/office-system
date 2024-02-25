import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type UrbanLand = {
  urbanLand: string;
  market_value_2003: number;
  market_value_2011: number;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  data : UrbanLand[] = [
    {urbanLand: 'Corn', market_value_2003: 1000, market_value_2011: 20},
    {urbanLand: 'Unirrigated Land', market_value_2003: 1000, market_value_2011: 20},
    {urbanLand: 'Mango', market_value_2003: 1000, market_value_2011: 20},
    {urbanLand: 'Tobacco', market_value_2003: 1000, market_value_2011: 20},
    {urbanLand: 'Cogon', market_value_2003: 1000, market_value_2011: 20},
    {urbanLand: 'Banana', market_value_2003: 1000, market_value_2011: 20},
    {urbanLand: 'Bamboo', market_value_2003: 1000, market_value_2011: 20},
  ]
  
}
