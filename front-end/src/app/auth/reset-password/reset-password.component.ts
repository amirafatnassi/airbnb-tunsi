import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../services/user/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent {
  validForm = false;
token:any
  constructor(
    private userService: UserService,
    private route: Router,
    private toastr: ToastrService,
    private router: ActivatedRoute
  ) {}
  ngOnInit() {
    this.token=this.router.snapshot.params["token"]
  }

  resetForm = new FormGroup({
    password: new FormControl("", [Validators.required]),
    pwd: new FormControl("", [Validators.required]),
    token: new FormControl('')
  });

  reset() {
    this.validForm = true;
    if (this.resetForm.invalid) {
      return;
    } 
    this.resetForm.value.token = this.token
    this.userService.resetPassword(this.resetForm.value).subscribe(
      (res: any) => {
          this.toastr.success(res.message, "Success!");
          this.route.navigate(["/dashboard"]);
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error.message, "Error!");
      }
    );
  }
}
