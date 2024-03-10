import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { FIREBASE_API_KEYS } from "env";
import { Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";

@Injectable({ providedIn: "root" })
export class AuthService {
    private readonly key = FIREBASE_API_KEYS;
    private signupURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.key;
    private loginURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.key;
    private http = inject(HttpClient);

    user = new Subject<User>;

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

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000));
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
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