import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  today = new Date();
  users: any[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
    };
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
          console.log("utilisateur supprimé !");
          this.ngOnInit();
        });
      }
    });
  }
}
