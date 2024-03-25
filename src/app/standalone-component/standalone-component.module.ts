import { NgModule } from "@angular/core";
import { StandaloneComponentComponent } from "./standalone-component.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { StandaloneComponentRouterModule } from "./standalone-component.routing";
import { DetailsComponent } from "./welcome/details/details.component";

@NgModule({
    declarations: [
        StandaloneComponentComponent,
        WelcomeComponent,
    ],
    imports: [StandaloneComponentRouterModule, DetailsComponent]
})
export class StandaloneComponentModule {

}