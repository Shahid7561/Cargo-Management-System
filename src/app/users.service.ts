/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable prefer-const */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private logUrl = environment.loginUrl;
  private regUrl = environment.registerUrl;
  private disUrl = environment.displayUrl;
  private upUrl = environment.upUrl;

  constructor(private http: HttpClient) { }

  create(student: any){
    return this.http.post(this.regUrl, student);
  }

  login(credentials: any){
    return this.http.post(this.logUrl, credentials);
  }

  updates(email: any){
    return this.http.put(this.upUrl,email);
  }

  check(id:any) {
    console.log(id);

    let url3 = this.disUrl;
    return this.http.get(url3 + '/' + id);
  }

  display(){
    const disUrl = this.disUrl;
    return this.http.get(disUrl);
  }
}
