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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'assignment3', component: Assignment3Component },
  {
    path: 'project1', component: Project1Component,
    children: [
      { path: '', redirectTo: 'recipes', pathMatch: 'full' },
      {
        path: 'recipes', component: RecipesComponent,
        children: [
          { path: '', component: RecipeStartComponent },
          { path: ':id', component: RecipeDetailComponent },
        ]
      },
      { path: 'shopping-list', component: ShoppingListComponent }
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
  // { path: "/not-fount", component: RouteNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page Not Found!' } },
  { path: "**", redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }