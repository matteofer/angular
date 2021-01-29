import { NgModule } from "@angular/core";
import { Router, Routes, RouterModule } from "@angular/router";
import { CanActivateGuard } from "./core/can-activate.guard";
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(mod => mod.AuthModule)
  },
  {
    path: "dash",
    canActivate: [CanActivateGuard],
    //data: { admin: true },
    loadChildren: () => import("./dash/dash.module").then(mod => mod.DashModule)
  },
  {
    path: "admin",
    canActivate: [CanActivateGuard],
    data: { admin: true },
    loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule),
    //redirectTo: "admin/dashboard"
  },
  {
    path: "**",
    redirectTo: "/auth/landing"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
