import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChallengeComponent } from './challenge/challenge.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    UserListComponent,
    ChallengeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    SignInComponent,
    ChallengeComponent
  ]
})
export class UsersModule { }
