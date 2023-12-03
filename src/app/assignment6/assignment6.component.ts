import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component {
  @ViewChild("form") form: NgForm;
  userData = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.userData.email = this.form.form.value.email;
    this.userData.subscription = this.form.form.value.subscription;
    this.userData.password = this.form.form.value.password;
    console.log(this.userData);
  }

}
