import { Component } from "@angular/core";
import { UserService } from "../services/user/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-list-users",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"],
})
export class ListUsersComponent {
  today = new Date();
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.UserList();
  }

  UserList() {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }

  suppUser(id: number) {
    Swal.fire({
      title: "Êtes-vous sûre?",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      cancelButtonColor: "btn btn-secondary",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe((res: any) => {
          console.log("user deleted !");
          this.ngOnInit();
        });
      }
    });
  }
}
