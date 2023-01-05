import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  validForm = false;
  users: any[] = [];
  constructor(private userService: UserService, private route: Router) {}
  ngOnInit() {}

  loginForm = new FormGroup({
    email: new FormControl(0, [Validators.required, Validators.email]),
    pwd: new FormControl(0, [Validators.required]),
  });

  login() {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res;
      let connect = this.users.find(
        (user) =>
          user.email === this.loginForm.value.email &&
          user.pwd == this.loginForm.value.pwd
      );

      if (connect == undefined) {
        alert("vérifier email et password");
      } else {
        this.route.navigate(["/profile"]);
      }
    });
  }
}
