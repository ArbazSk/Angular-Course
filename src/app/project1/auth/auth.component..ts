import { Component, inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
    isLoginMode = false;
    isLoading = false;
    error: string = null;
    private authService = inject(AuthService);

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
        console.log(this.isLoginMode)
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        if (!form.valid) return;
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;
        if (this.isLoginMode) {

        } else {
            this.signup(email, password);
        }

        form.reset();
    }

    signup(email, pass) {
        this.authService.signUp(email, pass)
            .subscribe(response => {
                console.log(response)
                this.isLoading = false;
            }, err => {
                console.log(err);
                this.error = 'An error occurred!';
                this.isLoading = false;
            })
    }
}