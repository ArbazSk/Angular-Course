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
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Project1Component } from './project1/project1.component';
import { HeaderComponent } from './project1/header/header.component';
import { RecipesComponent } from './project1/recipes/recipes.component';
import { RecipeListComponent } from './project1/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './project1/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './project1/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './project1/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './project1/shopping-list/shopping-edit/shopping-edit.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';


@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    WarningAlertComponent,
    SucessAlertComponent,
    SideBarComponent,
    HomeComponent,
    Assignment2Component,
    Assignment3Component,
    Project1Component,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
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
