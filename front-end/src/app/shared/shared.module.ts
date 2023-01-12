import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsersModule } from "../users/users.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, UsersModule],
  exports: [CommonModule, UsersModule],
})
export class SharedModule {}
