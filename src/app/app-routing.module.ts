import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Assignment1Component } from "./assignment1/assignment1.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assignment1', component: Assignment1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }