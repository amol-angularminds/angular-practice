import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { CustomePiPipe } from './pipes/custome-pi.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    PageNotFoundComponent,
    ForgetPasswordComponent,
    SignupComponent,
    CustomePiPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
