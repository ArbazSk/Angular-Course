import { Component } from "@angular/core";

@Component({
    selector: "app-loading",
    template: `
    <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>`,
    styleUrls: ["./loading.component.css"]
})
export class Loading { }