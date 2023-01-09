import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validForm = false;
  users: any[] = [];
  constructor(private userService: UserService, private route: Router,private toastr: ToastrService) {}
  ngOnInit() {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    this.validForm = true;
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login(this.loginForm.value).subscribe((res: any) => {
      console.log(res);
      if(res){
        this.toastr.success(res.message, 'Success!');
        this.route.navigate(['/dashboard']);
      }
    }, (error)=> {console.log(error);
      this.toastr.error(error.error.message, 'Error!');
      // alert(error.error.message);
    });
  }
}
