import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Request on its way");
        console.log(req.url);
        const modifiedRequest = req.clone({
            headers: req.headers.append("Auth", "xyz")
        });
        // we can change the request object.
        // we can add headers, add other options also , etc.
        return next.handle(modifiedRequest);
    }

}