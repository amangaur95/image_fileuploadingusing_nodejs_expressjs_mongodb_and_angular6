import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  
  uri = "http://localhost:3000/adduser";

  constructor(private http: HttpClient) { }

  addUser(details,imagename): Observable<any>{
    const obj={
      details:details,
      imagename:imagename
    }
    return this.http.post(`${this.uri}/adduser`,obj);
  }

}
