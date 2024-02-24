import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-basic-form",
  templateUrl: "./reactive-basic-form.component.html",
  styleUrls: ["./reactive-basic-form.component.css"]
})
export class ReactiveBasicFormComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['Anna', 'Chris'];
  form: UntypedFormGroup;
  constructor() { }

  noSpaceAllowed = (control: AbstractControl) => {
    if (control.value != null && control.value.indexOf(" ") != -1) return { noSpaceAllowed: true };
    else return null;
  }

  forbiddenNames = (control: AbstractControl) => {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    } else return null;
  }

  forbiddenEmail = (control: FormControl<string>) => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true })
        } else {
          resolve(null)
        }
      }, 1500);
    });
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl("", [Validators.required, this.noSpaceAllowed, this.forbiddenNames]),
        'email': new FormControl('', [Validators.required, Validators.email], this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([]),
      'skills': new FormArray([]),
      'experience': new FormArray([])
    });

    // we can use the below hooks, to closely watch the form changes.
    // below code will watch all form control changes.
    // we can set observable to individuals form control also.
    // this.form.valueChanges.subscribe(value => {
    //   console.log(value);
    // });

    // this.form.get('gender').valueChanges.subscribe(gender => {
    //   console.log("Values of gender :: ", gender);
    // });

    // when using setValue in form we must provide all the formControl values 
    this.form.setValue({
      'userData': {
        'username': "Max",
        'email': "max@max.com"
      },
      'gender': 'male',
      'hobbies': [],
      'skills': [],
      'experience': []
    });

    this.form.patchValue({
      'userData': {
        'username': "MaxWell",
      }
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
    const skills = this.form.get('hobbies') as UntypedFormArray;
    skills.removeAt(i);
  }

  addSkill() {
    const skills = this.form.get('skills') as UntypedFormArray
    skills.push(new UntypedFormControl(''));
  }

  delete(i: number) {
    const skills = this.form.get('skills') as UntypedFormArray;
    skills.removeAt(i);
  }

  addExperience() {
    const group = new UntypedFormGroup({
      company: new UntypedFormControl(''),
      position: new UntypedFormControl(''),
      totalExp: new UntypedFormControl(''),
      start: new UntypedFormControl(''),
      end: new UntypedFormControl(''),
    });

    const exp = this.form.get('experience') as UntypedFormArray
    exp.push(group);
  }

  deleteExp(i: number) {
    const exp = this.form.get('experience') as UntypedFormArray;
    exp.removeAt(i);
  }

}
