import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminModule } from './modules/admin/admin.module';
import { LandingPageModule } from './modules/landing-page/landing-page.module';
const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./modules/landing-page/landing-page.module').then((m) => m.LandingPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((n) => n.AdminModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
