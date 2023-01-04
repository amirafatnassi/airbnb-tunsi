import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "app/services/user/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
  validForm = false;
  userForm = new FormGroup({
    nom: new FormControl("", Validators.required),
    prenom: new FormControl("", Validators.required),
    dateNaissance: new FormControl("", Validators.required),
    tel: new FormControl(0, [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    pwd: new FormControl("", [Validators.required]),
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
