import { RouterModule, Routes } from "@angular/router";
import { StandaloneComponentComponent } from "./standalone-component.component";
import { NgModule } from "@angular/core";

const route: Routes = [
    {
        path: "",
        component: StandaloneComponentComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class StandaloneComponentRouterModule { }