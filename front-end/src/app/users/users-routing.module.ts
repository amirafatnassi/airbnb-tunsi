import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UsersComponent } from './users.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UsersComponent },
      { path: 'register', component: AddUserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
      { path: 'reset-password/:token', component: ResetPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
