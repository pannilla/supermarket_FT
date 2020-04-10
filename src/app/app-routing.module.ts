import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketsComponent } from './supermarkets/supermarkets.component';
import { SupermakertAvailabilityComponent }  from './supermakert-availability/supermakert-availability.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SupermakertAvailabilityComponent },
  { path: 'supermarkets', component: SupermarketsComponent }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }