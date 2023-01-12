import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OptionsRoutingModule } from "./options-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OptionsComponent } from "./options.component";
import { AddOptionComponent } from "./add-option/add-option.component";
import { EditOptionComponent } from "./edit-option/edit-option.component";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [OptionsComponent, AddOptionComponent, EditOptionComponent],
  imports: [
    CommonModule,
    OptionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
})
export class OptionsModule {}
