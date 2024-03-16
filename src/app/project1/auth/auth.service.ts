import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { FIREBASE_API_KEYS } from "env";
import { BehaviorSubject, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthService {
    private readonly key = FIREBASE_API_KEYS;
    private signupURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.key;
    private loginURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.key;
    private http = inject(HttpClient);
    private router = inject(Router);
    private tokenExpirationTimer: any;

    user = new BehaviorSubject<User>(null);

    signUp(email: string, password: string) {
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        return this.http.post<AuthResponse>(this.signupURL, payload)
            .pipe(catchError(this.handleError),
                tap(res => this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn)));
    }

    singIn(email: string, password: string) {
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        return this.http.post<AuthResponse>(this.loginURL, payload)
            .pipe(catchError(this.handleError),
                tap(res => this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn)));
    }

    logout() {
        this.user.next(null);
        this.router.navigate(["project1/login"]);
        localStorage.removeItem("userData");
        if (this.tokenExpirationTimer) clearTimeout(this.tokenExpirationTimer);
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000); // in miliseconds
        localStorage.setItem("userData", JSON.stringify(user));
    }

    autoLogin() {
        const userData: {
            email: string,
            id: string,
            _token: string,
            _tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem("userData"));
        if (!userData) return;
        const lodedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (lodedUser.token) {
            this.user.next(lodedUser);
            const expirationDate = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDate);
        }
    }

    private handleError(err: HttpErrorResponse) {
        let error = "An Unknown Error Occurred!."
        if (!err.error || !err.error.error) {
            return throwError(error);
        }
        switch (err.error.error.message) {
            case "EMAIL_EXISTS":
                error = "Email Already Exist";
                break;
            case "EMAIL_NOT_FOUND":
                error = "Email Does not Found";
                break;
            case "INVALID_PASSWORD":
                error = "Password was wrong";
                break;
        }
        return throwError(error);
    }

}

export interface AuthResponse {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}