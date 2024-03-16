import { Component, inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponse, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

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
    private router = inject(Router);

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        if (!form.valid) return;
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;

        let auth$: Observable<AuthResponse>;
        if (this.isLoginMode) {
            auth$ = this.authService.singIn(email, password);
        } else {
            auth$ = this.authService.signUp(email, password);
        }

        auth$.subscribe(response => {
            console.log(response)
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        }, err => {
            console.log(err);
            this.error = err;
            this.isLoading = false;
        })

        form.reset();
    }

    close() {
        this.error = null;
    }
}