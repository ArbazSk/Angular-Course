import { Component, inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
    isLogging = false;
    private authService = inject(AuthService);

    onSwitchMode() {
        this.isLogging = !this.isLogging;
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        if (!form.valid) return;
        const email = form.value.email;
        const password = form.value.password;

        if (this.isLogging) {

        } else {
            this.signup(email, password);
        }

        form.reset();
    }

    signup(email, pass) {
        this.authService.signUp(email, pass)
            .subscribe(response => {
                console.log(response)
            }, err => console.log(err))
    }
}