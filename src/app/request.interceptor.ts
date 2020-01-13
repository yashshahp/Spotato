import {Injectable} from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from "rxjs/operators"

@Injectable()
export class RequestInterceptor implements HttpInterceptor{
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        console.log(req.url);
        return next.handle(req).pipe(map(event=>{
            if (event instanceof HttpResponse){
                console.log(event)
            }
            return event;
        }));
    }
    constructor(){}
    
}