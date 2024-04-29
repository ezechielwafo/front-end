import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path :"login", component : LoginComponent},
  {path :"", redirectTo: "/login", pathMatch: "full"},
  {path :"admin", component : NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
