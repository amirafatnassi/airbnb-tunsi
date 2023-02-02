import { Component } from "@angular/core";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent {
  users: any[] = [];
  userId: any;
  user: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.myUser();
  }

  myUser() {
    this.userService.myProfile().subscribe((res: any) => {
      this.user = res;
    });
  }
}
