import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Class/User'

@Injectable({providedIn: 'root'})
export class UserService {
  constructor (private http: HttpClient) {
  }
        listar() {
          return this.http.get<User[]>('http://localhost:8080/api/user');
        }

        gravar(user){
          this.http.post('http://localhost:8080/api/user/new', user)
          .subscribe(dados => console.log(dados));

        }
}  
