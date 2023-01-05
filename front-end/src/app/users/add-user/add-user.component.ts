import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  validForm = false;
  userForm = new FormGroup({
    lastName: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    role: new FormControl(0, [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private userService: UserService) {}
  ngOnInit() {}

  onSubmitFormGroupe() {
    this.validForm = true;
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      return;
    }
    this.userService.createUser(this.userForm.value).subscribe((res: any) => {
      console.log(res);
    });
  }
}
