import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../userService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private userService: UserService) {
    this.users = userService.getActiveUsers();
  }
  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userService.onSetToInactive(id);
  }
}
