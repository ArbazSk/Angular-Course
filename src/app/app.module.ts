import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { SucessAlertComponent } from './assignment1/sucess-alert/sucess-alert.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    WarningAlertComponent,
    SucessAlertComponent,
    SideBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
