import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
