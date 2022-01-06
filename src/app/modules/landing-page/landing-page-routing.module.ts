import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { LandingPageModule } from './landing-page.module';
import { ForgotPasswordComponent } from './componentes/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'welcome',
  component:LandingPageModule,
  children:[
    {path:'/login',component:LoginComponent},
    {path:'/forgetPassword',component:ForgotPasswordComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
