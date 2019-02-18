import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../Profile/Profile';

@Injectable({providedIn: 'root'})
export class ProfileService {
  constructor (private http: HttpClient) {}
  
  listall() {
    return this.http.get<Profile[]>('http://localhost:8080/api/profile');
    }

    gravar(profile){
      this.http.post('http://localhost:8080/api/profile/new', profile)
      .subscribe(dados => console.log(dados));

    }
 
}
