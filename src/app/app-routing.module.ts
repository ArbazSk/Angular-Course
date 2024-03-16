import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Assignment1Component } from "./assignment1/assignment1.component";
import { Assignment2Component } from "./assignment2/assignment2.component";
import { Assignment3Component } from "./assignment3/assignment3.component";
import { Assignment4Component } from "./assignment4/assignment4.component";
import { Assignment5Component } from "./assignment5/assignment5.component";
import { DirectivesComponent } from "./directives/directives.component";
import { HomeComponent } from "./home/home.component";
import { Project1Component } from "./project1/project1.component";
import { RoutingBasic } from "./routing-basic/routing-basic.component";
import { HomeComponentR } from "./routing-basic/home/home.component";
import { ServersComponent } from "./routing-basic/servers/servers.component";
import { UsersComponent } from "./routing-basic/users/users.component";
import { RouteNotFoundComponent } from "./route-not-found/route-not-found.component";
import { UserComponent } from "./routing-basic/users/user/user.component";
import { EditServerComponent } from "./routing-basic/servers/edit-server/edit-server.component";
import { ServerComponent } from "./routing-basic/servers/server/server.component";
import { AuthGuardGuard } from "./auth.guard";
import { canDeactivateGuard } from "./routing-basic/servers/edit-server/can-deactivate.guard";
import { ErrorPageComponent } from "./routing-basic/error-page/error-page.component";
import { ServerResolver } from "./routing-basic/servers/server/server-resolver.service";
import { RecipesComponent } from "./project1/recipes/recipes.component";
import { ShoppingListComponent } from "./project1/shopping-list/shopping-list.component";
import { RecipeDetailComponent } from "./project1/recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./project1/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./project1/recipes/recipe-edit/recipe-edit.component";
import { ObsComponent } from "./observables/obs.component";
import { HomeObsComponents } from "./observables/home/home.component";
import { UserObsComponents } from "./observables/user/user.component";
import { BasicFormComponent } from "./angular-forms/template-driven/basic-form/basic-form.component";
import { Assignment6Component } from "./assignment6/assignment6.component";
import { ReactiveBasicFormComponent } from "./angular-forms/reactive-form/reactive-basic-form/reactive-basic-form.component";
import { Assignment7Component } from "./assignment7/assignment7.component";
import { PipesComponent } from "./pipes/pipes.component";
import { Assignment8Component } from "./assignment8/assignment8.component";
import { HttpBasicComponent } from "./http-basic/http-basic.component";
import { recipeResolver } from "./project1/recipes/recipe-resolver.service";
import { AuthComponent } from "./project1/auth/auth.component.";
import { authGuard } from "./project1/auth/auth.guard";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'assignment3', component: Assignment3Component },
  {
    path: 'project1', component: Project1Component,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'recipes', component: RecipesComponent, canActivate: [authGuard],
        children: [
          { path: '', component: RecipeStartComponent },
          { path: 'new', component: RecipeEditComponent },
          { path: ':id', component: RecipeDetailComponent, resolve: { resolver: recipeResolver } },
          { path: ':id/edit', component: RecipeEditComponent, resolve: { resolver: recipeResolver } },
        ]
      },
      { path: 'shopping-list', component: ShoppingListComponent },
      { path: 'login', component: AuthComponent }
    ]
  },
  { path: 'assignment4', component: Assignment4Component },
  { path: 'directives', component: DirectivesComponent },
  { path: 'assignment5', component: Assignment5Component },
  {
    path: 'routing-basic', component: RoutingBasic,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponentR },
      {
        path: 'servers', component: ServersComponent,
        children: [
          { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
          { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard] },
        ],
        // canActivate: [AuthGuardGuard]
        canActivateChild: [AuthGuardGuard]
      },
      {
        path: 'users', component: UsersComponent,
        children: [
          { path: ':id/:name', component: UserComponent },
        ]
      },
    ]
  },
  {
    path: 'observables', component: ObsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeObsComponents },
      { path: 'user/:id', component: UserObsComponents }
    ]
  },
  { path: "not-found", component: RouteNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page Not Found!' } },
  { path: "template-forms", component: BasicFormComponent },
  { path: "reactive-forms", component: ReactiveBasicFormComponent },
  { path: "assignment6", component: Assignment6Component },
  { path: "assignment7", component: Assignment7Component },
  { path: "pipes", component: PipesComponent },
  { path: "assignment8", component: Assignment8Component },
  { path: "http-basic", component: HttpBasicComponent },
  { path: "**", redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }