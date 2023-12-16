import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './reactive-basic-form.component.html',
  styleUrls: ['./reactive-basic-form.component.css']
})
export class ReactiveBasicFormComponent implements OnInit {
  genders = ['male', 'female'];
  form: FormGroup;
  constructor() { }

  noSpaceAllowed = (control: FormControl) => {
    if (control.value != null && control.value.indexOf(" ") != -1) return { noSpaceAllowed: true };
    else return null;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        'email': new FormControl('', [Validators.required, Validators.email])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
      'skills': new FormArray([]),
      'experience': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  addhobbies() {
    (this.form.get('hobbies') as FormArray).push(new FormControl("", Validators.required));
  }

  get hobbies() {
    return (this.form.get('hobbies') as FormArray).controls;
  }

  deleteHobbie(i: number) {
    const skills = this.form.get('hobbies') as FormArray;
    skills.removeAt(i);
  }

  addSkill() {
    const skills = this.form.get('skills') as FormArray
    skills.push(new FormControl(''));
  }

  delete(i: number) {
    const skills = this.form.get('skills') as FormArray;
    skills.removeAt(i);
  }

  addExperience() {
    const group = new FormGroup({
      company: new FormControl(''),
      position: new FormControl(''),
      totalExp: new FormControl(''),
      start: new FormControl(''),
      end: new FormControl(''),
    });

    const exp = this.form.get('experience') as FormArray
    exp.push(group);
  }

  deleteExp(i: number) {
    const exp = this.form.get('experience') as FormArray;
    exp.removeAt(i);
  }

}
