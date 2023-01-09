import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
