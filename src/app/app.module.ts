import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { WarningAlertComponent } from './assignment1/warning-alert/warning-alert.component';
import { SucessAlertComponent } from './assignment1/sucess-alert/sucess-alert.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicDirective } from './directives/basic-highlight.directive';
import { BetterHighlighterDirective } from './directives/better-highlight.directive';
import { Assignment5Component } from './assignment5/assignment5.component';
import { InactiveUsersComponent } from './assignment5/inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './assignment5/active-users/active-users.component';
import { RoutingBasic } from './routing-basic/routing-basic.component';
import { HomeComponentR } from './routing-basic/home/home.component';
import { ServersComponent } from './routing-basic/servers/servers.component';
import { EditServerComponent } from './routing-basic/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing-basic/servers/server/server.component';
import { UsersComponent } from './routing-basic/users/users.component';
import { UserComponent } from './routing-basic/users/user/user.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { ErrorPageComponent } from './routing-basic/error-page/error-page.component';
import { ObsComponent } from './observables/obs.component';
import { HomeObsComponents } from './observables/home/home.component';
import { UserObsComponents } from './observables/user/user.component';
import { BasicFormComponent } from './angular-forms/template-driven/basic-form/basic-form.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { ReactiveBasicFormComponent } from './angular-forms/reactive-form/reactive-basic-form/reactive-basic-form.component';
import { Assignment7Component } from './assignment7/assignment7.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { Assignment8Component } from './assignment8/assignment8.component';
import { ReversePipe } from './assignment8/reverse.pipe';
import { SortPipe } from './assignment8/sort.pipe';
import { HttpBasicComponent } from './http-basic/http-basic.component';
import { AuthInterceptorService } from './http-basic/auth-interceptor.service';
import { LoggingInterceptorService } from './http-basic/loggin-interceptor.service';
import { StandaloneComponentModule } from './standalone-component/standalone-component.module';

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
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesComponent,
    BasicDirective,
    BetterHighlighterDirective,
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
    //observabels component
    ObsComponent,
    HomeObsComponents,
    UserObsComponents,
    BasicFormComponent,
    Assignment6Component,
    ReactiveBasicFormComponent,
    Assignment7Component,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    Assignment8Component,
    ReversePipe,
    SortPipe,
    HttpBasicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StandaloneComponentModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true // says that we can use multiple interceptors
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
