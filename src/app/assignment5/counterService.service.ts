import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    private activeToinactive = 0;
    private inactiveToActive = 0;

    activeToinactiveIncrement() {
        this.activeToinactive++;
        console.log("activeToinactive :: ", this.activeToinactive)
    }

    inactiveToActiveIncrement() {
        this.inactiveToActive++;
        console.log("inactiveToActive :: ", this.inactiveToActive);
    }

}