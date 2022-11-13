import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Assignment1Component } from "./assignment1/assignment1.component";
import { Assignment2Component } from "./assignment2/assignment2.component";
import { Assignment3Component } from "./assignment3/assignment3.component";
import { Assignment4Component } from "./assignment4/assignment4.component";
import { DirectivesComponent } from "./directives/directives.component";
import { HomeComponent } from "./home/home.component";
import { Project1Component } from "./project1/project1.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignment1', component: Assignment1Component },
  { path: 'assignment2', component: Assignment2Component },
  { path: 'assignment3', component: Assignment3Component },
  { path : 'project1', component: Project1Component },
  { path : 'assignment4', component: Assignment4Component},
  { path : 'directives', component : DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }