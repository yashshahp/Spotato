import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  expiryTime;
  access_token;
  constructor(private http: HttpClient) { }
  getToken() {

    let option = {
      headers: {
        'Authorization': 'Basic ' + 'MzhlZjBhYzZlNDIzNGFkZDg1MTlkODBmMzQzNDdiM2M6M2MzZDU1NjljNjNhNGYyMjg2MDZiN2I5NmYwMWRiMzA',
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: new HttpParams().set('grant_type', 'client_credentials')
    }
    return this.http.post("https://accounts.spotify.com/api/token", option.body, option)
  }
async  newToken() {
    let response:any = await this.getToken().toPromise();
    let currentTime = new Date().getTime()
    this.expiryTime = currentTime + response.expire_in * 1000;
    this.access_token=response.access_token;
    return response.access_token;
  }
  isValid() {
    let currentTime = new Date().getTime();
    if(this.access_token){
      return false
    }
    if (currentTime > this.expiryTime) {
      return false
    }
    return  (currentTime<this.expiryTime && this.access_token)
  }
}
