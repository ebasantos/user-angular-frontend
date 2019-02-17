import { Component, OnInit } from '@angular/core';
import { UserService } from "../users-service.service";
import { HttpClient } from '@angular/common/http';
import { User } from '../Class/User';
@Component({
  selector: 'app-users-post',
  templateUrl: './users-post.component.html',
  styleUrls: ['./users-post.component.css']
})
export class UsersPostComponent{
  http: HttpClient;
  
  constructor(private userService: UserService){}
    
  onSubmit(user){
       this.userService.gravar(user.value)
       alert('Usuario cadastrado com sucesso');
    }
}
