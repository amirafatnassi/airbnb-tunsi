import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddUserComponent } from "./add-user/add-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ProfileComponent } from "./profile/profile.component";
import { UsersComponent } from "./users.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: UsersComponent },
      { path: "register", component: AddUserComponent },
      { path: "update/:id", component: EditUserComponent },
      { path: "myProfile", component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
