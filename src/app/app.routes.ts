import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComputationComponent } from './pages/computation/computation.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'computation', component: ComputationComponent}
];
