import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bottomview1Component } from './bottomView/bottomview1/bottomview1.component';
import { Bottomview2Component } from './bottomView/bottomview2/bottomview2.component';
import { Bottomview3Component } from './bottomView/bottomview3/bottomview3.component';

@NgModule({
  declarations: [
    AppComponent,
    Bottomview1Component,
    Bottomview2Component,
    Bottomview3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
