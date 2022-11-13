import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../userService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userService: UserService) {
    this.users = userService.getInActiveUsers();
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.onSetToActive(id);
  }
}
