import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminModule } from './admin.module';

const routes: Routes = [
  {path:'' ,component:AdminModule,
  children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'',redirectTo:'/admin/home',pathMatch:'full'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
