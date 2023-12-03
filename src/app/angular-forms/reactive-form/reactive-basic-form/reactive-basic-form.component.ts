import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './reactive-basic-form.component.html',
  styleUrls: ['./reactive-basic-form.component.css']
})
export class ReactiveBasicFormComponent implements OnInit {
  genders = ['male', 'female'];
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl('', [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
