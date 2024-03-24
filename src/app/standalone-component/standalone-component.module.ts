import { NgModule } from "@angular/core";
import { StandaloneComponentComponent } from "./standalone-component.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { DetailsComponent } from "./welcome/details/details.component";
import { RouterModule, Routes } from "@angular/router";
import { StandaloneComponentRouterModule } from "./standalone-component.routing";

@NgModule({
    declarations: [
        StandaloneComponentComponent,
        WelcomeComponent,
        DetailsComponent,
    ],
    imports: [StandaloneComponentRouterModule]
})
export class StandaloneComponentModule {

}