import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  validForm = false;
  users: any[] = [];
  constructor(private userService: UserService, private route: Router,private toastr: ToastrService) {}

  ngOnInit() {}

  forgetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  login() {
    this.validForm = true;
    if (this.forgetForm.invalid) {
      return;
    }
    this.userService.forgetPassword(this.forgetForm.value).subscribe((res: any) => {
      if(res){
        this.toastr.success(res.message, 'Success!');
        this.route.navigate(['/dashboard']);
      }
    }, (error)=> {
      this.toastr.error(error.error.message, 'Error!');
    });
  }
}