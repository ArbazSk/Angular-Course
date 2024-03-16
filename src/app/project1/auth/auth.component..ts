import { Component, ComponentFactoryResolver, OnDestroy, ViewChild, inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponse, AuthService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnDestroy {
    isLoginMode = false;
    isLoading = false;
    error: string = null;
    private authService = inject(AuthService);
    private router = inject(Router);
    private componentFactoryResolver = inject(ComponentFactoryResolver);
    @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
    private alertSub: Subscription;

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
            this.showErrorAlert(err);
            this.isLoading = false;
        })

        form.reset();
    }

    close() {
        this.error = null;
    }

    private showErrorAlert(message: string) {
        const alertComp = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContRef;
        hostViewContainerRef.clear();

        const compoRef = hostViewContainerRef.createComponent(alertComp);
        compoRef.instance.message = message;
        this.alertSub = compoRef.instance.close.subscribe(() => {
            this.alertSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy(): void {
        if (this.alertSub) this.alertSub.unsubscribe();
    }
}