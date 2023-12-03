import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
  @ViewChild('form') signUpForm: NgForm;
  answer = '';
  genders = ['male', 'female'];
  user_data = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  constructor() { }
  ngOnInit(): void { }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswered: '',
    //   gender: 'male'
    // });
    // setValue need all the control name i.e all form controls

    // using patchValue in form obj we can set only control we need to set the value
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
    this.submitted = true;
    this.user_data.username = this.signUpForm.value.userData.username;
    this.user_data.email = this.signUpForm.value.userData.email;
    this.user_data.secret = this.signUpForm.value.secret;
    this.user_data.answer = this.signUpForm.value.questionAnswered;
    this.user_data.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }

}
