import{SearchComponent} from './search/search.component';

import{HomeComponent} from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'Submit', component:CreateComponent},
  {path: 'home1', component:Home1Component},
  {path: 'search', component:SearchComponent},
  {path: 'myaccount', component:SearchComponent},
  {path: 'create', component:CreateComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
