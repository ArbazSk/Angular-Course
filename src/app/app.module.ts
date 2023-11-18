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
import { DirectivesComponent } from './directives/directives.component';
import { BasicDirective } from './directives/basic-highlight.directive';
import { BetterHighlighterDirective } from './directives/better-highlight.directive';
import { DropDownDirective } from './project1/shared/dropdown.directive';
import { Assignment5Component } from './assignment5/assignment5.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { ShoppingListService } from './project1/shopping-list/shopping-list.service';
import { RoutingBasic } from './routing-basic/routing-basic.component';
import { HomeComponentR } from './routing-basic/home/home.component';
import { ServersComponent } from './routing-basic/servers/servers.component';
import { EditServerComponent } from './routing-basic/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing-basic/servers/server/server.component';
import { UsersComponent } from './routing-basic/users/users.component';
import { UserComponent } from './routing-basic/users/user/user.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { ErrorPageComponent } from './routing-basic/error-page/error-page.component';
import { RecipeStartComponent } from './project1/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './project1/recipes/recipe-edit/recipe-edit.component';
import { ObsComponent } from './observables/obs.component';
import { HomeObsComponents } from './observables/home/home.component';
import { UserObsComponents } from './observables/user/user.component';


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
    DirectivesComponent,
    BasicDirective,
    BetterHighlighterDirective,
    DropDownDirective,
    Assignment5Component,
    ActiveUsersComponent,
    InactiveUsersComponent,
    //Routing Basic Components
    RoutingBasic,
    HomeComponentR,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    RouteNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    //observabels component
    ObsComponent,
    HomeObsComponents,
    UserObsComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
