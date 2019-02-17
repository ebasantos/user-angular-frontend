import { Component } from '@angular/core';
import { User } from "../Class/User";
import { UserService } from "../users-service.service";

@Component({
  selector: 'app-users-get',
  templateUrl: './users-get.component.html',
  styleUrls: ['./users-get.component.css']
})
export class UsersGetComponent {
  user: User[];
  
  constructor (userService : UserService){
    userService.listar()
    .subscribe(user => {
              this.user = user;
              console.log(this.user);
            });
  }

}
