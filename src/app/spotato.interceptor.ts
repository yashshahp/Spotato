// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs';

// import { SpotateService } from './spotate.service'

// @Injectable()
// export class BasicAuthInterceptor implements HttpInterceptor {
//     constructor(private spotatoService: SpotateService) { }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         // add authorization header with basic auth credentials if available
//         const currentUser = this.authenticationService.currentUserValue;
//         if (currentUser && currentUser.authdata) {
//             request = request.clone({
//                 setHeaders: { 
//                     Authorization: `Basic ${currentUser.authdata}`
//                 }
//             });
//         }

//         return next.handle(request);
//     }
// }
