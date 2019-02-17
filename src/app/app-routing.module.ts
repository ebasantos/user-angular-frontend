import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomeComponent } from "./home/home.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import {  UsersGetComponent } from "./users-get/users-get.component";
import {  UsersPostComponent } from "./users-post/users-post.component";

const routes: Routes =[
  {path: 'user/new', component : UsersPostComponent},
  {path: 'user', component : UsersGetComponent},
  {path: '', component : HomeComponent},
  {path: '**', component : NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
