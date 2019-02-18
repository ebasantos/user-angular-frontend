import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UsersGetComponent } from './users-get/users-get.component';
import { UsersPostComponent } from './users-post/users-post.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { ProfileGetComponent } from './Profile/profile-get/profile-get.component';
import { ProfilePostComponent } from './profile/profile-post/profile-post.component';
import { MachineGetComponent } from './machine/machine-get/machine-get.component';
import { MachinePostComponent } from './machine/machine-post/machine-post.component';
import { MachinesUsersGetComponent } from './Users-Machines/machines-users-get/machines-users-get.component';
import { MachinesUsersPostComponent } from './Users-Machines/machines-users-post/machines-users-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    UsersGetComponent,
    UsersPostComponent,
    ProfileGetComponent,
    ProfilePostComponent,
    MachineGetComponent,
    MachinePostComponent,
    MachinesUsersGetComponent,
    MachinesUsersPostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
