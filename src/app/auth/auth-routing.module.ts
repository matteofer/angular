import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';



const routes: Routes = [
  {
    path: 'signin', component: SigninComponent,
  },
  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'landing', component: LandingComponent,
  },
  {
    path: 'adminpage', component: AdminpageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
