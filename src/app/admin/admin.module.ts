import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';

/*const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:'dashboard', component: DashboardComponent }

]*/

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
    //RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
