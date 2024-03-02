import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
    private readonly key = "AIzaSyDhLIG-P5Kyh-zndRMe4MsPrDIIPi_JdeU";
    private signupURL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.key;
    private loginURL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.key;
    private http = inject(HttpClient);

    signUp(email: string, password: string) {
        const payload = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        return this.http.post<AuthResponse>(this.signupURL, payload);
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