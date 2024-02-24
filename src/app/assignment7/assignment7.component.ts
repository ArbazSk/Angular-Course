import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assignment7',
  templateUrl: './assignment7.component.html',
  styleUrls: ['./assignment7.component.css']
})
export class Assignment7Component {

  projectNameNotAllowed = (control: UntypedFormControl) => {
    if (control.value === 'Test') return { projectNameNotAllowed: true };
    else return null;
  }

  emailNotAllowed = (control: UntypedFormControl) => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        console.log("Subscriber");
        if (control.value === 'test@test.com') resolve({ emailNotAllowed: true });
        else resolve(null);
      }, 1500);
    })
  }

  form: UntypedFormGroup = new UntypedFormGroup({
    projectName: new UntypedFormControl(null, [Validators.required, this.projectNameNotAllowed]),
    email: new UntypedFormControl(null, [Validators.required, Validators.email], this.emailNotAllowed),
    status: new UntypedFormControl('Stable')
  });

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }

}
