import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from "rxjs/operators"
import { TokenService } from './token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    access_token;
    constructor(private tokenService: TokenService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(request.url);
        if (request.url == "https://accounts.spotify.com/api/token") {
            return next.handle(request);
        }
        else {
            return from(this.fetchAndAddToken(request,next));
        }
    }
    async fetchAndAddToken(request: HttpRequest<any>, next: HttpHandler) {
        let token = await this.tokenService.newToken();
        let newHeaders = request.headers;  
        if (token) {
            newHeaders = newHeaders.append('Authorization', "Bearer " + token);
        }
        const authReq = request.clone({ headers: newHeaders });
        return next.handle(authReq).toPromise();
    }
}