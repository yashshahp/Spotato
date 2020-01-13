import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
const access_token = 'BQDFOCyj1fL72L8hluYKgVOSit_-oZQgN8qxvsw5tWwyk5Q93zWghuNBM1JwK7NgkcMqTsJKJ4VIv9EofGU'

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + access_token); 
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}