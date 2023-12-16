import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.css']
})
export class Assignment7Component {

  projectNameNotAllowed = (control: FormControl) => {
    if (control.value === 'Test') return { projectNameNotAllowed: true };
    else return null;
  }

  emailNotAllowed = (control: FormControl) => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        console.log("Subscriber");
        if (control.value === 'test@test.com') resolve({ emailNotAllowed: true });
        else resolve(null);
      }, 1500);
    })
  }

  form: FormGroup = new FormGroup({
    projectName: new FormControl(null, [Validators.required, this.projectNameNotAllowed]),
    email: new FormControl(null, [Validators.required, Validators.email], this.emailNotAllowed),
    status: new FormControl('Stable')
  });

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }

}
