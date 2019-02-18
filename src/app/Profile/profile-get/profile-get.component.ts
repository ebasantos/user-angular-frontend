import { Component } from '@angular/core';
import { ProfileService } from '../profile-service.service';
import { Profile } from "../Profile";

@Component({
  selector: 'app-profile-get',
  templateUrl: './profile-get.component.html',
  styleUrls: ['./profile-get.component.css']
})
export class ProfileGetComponent {
  p: Profile[];
  
  constructor (profileService : ProfileService){
    profileService.listall()
                  .subscribe(p => {
                    p = p;
                  console.log(this.p);});
  }
}
