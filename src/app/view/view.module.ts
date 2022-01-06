import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';



@NgModule({
  declarations: [
    View1Component,
    View2Component,
    View3Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    View1Component,View2Component,View3Component
  ]
})
export class ViewModule { }
