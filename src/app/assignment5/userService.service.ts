import { Injectable } from "@angular/core";
import { CounterService } from "./counterService.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private activeUsers = ['Max', 'Anna'];
    private inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService: CounterService) { }

    getActiveUsers() {
        return this.activeUsers;
    }

    getInActiveUsers() {
        return this.inactiveUsers;
    }

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.activeToinactiveIncrement();
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.inactiveToActiveIncrement();
    }
}