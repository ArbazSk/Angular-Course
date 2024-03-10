import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { FIREBASE_API_KEYS } from "env";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthService {
    private readonly key = FIREBASE_API_KEYS;
    private signupURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.key;
    private loginURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.key;
    private http = inject(HttpClient);

    signUp(email: string, password: string) {
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        return this.http.post<AuthResponse>(this.signupURL, payload)
            .pipe(catchError(err => {
                let error = "An Unknown Error Occurred!."
                if (!err.error || !err.error.error) {
                    return throwError(error);
                }
                switch (err.error.error.message) {
                    case "EMAIL_EXISTS":
                        error = "Email Already Exist";
                        break;
                }
                return throwError(error);
            }));
    }

    singIn(email: string, password: string) {
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        return this.http.post<AuthResponse>(this.loginURL, payload);
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