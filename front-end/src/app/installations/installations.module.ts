import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InstallationsRoutingModule } from "./installations-routing.module";
import { InstallationsComponent } from "./installations.component";
import { AddInstallationComponent } from "./add-installation/add-installation.component";
import { EditInstallationComponent } from "./edit-installation/edit-installation.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    InstallationsComponent,
    AddInstallationComponent,
    EditInstallationComponent,
  ],
  imports: [
    CommonModule,
    InstallationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
})
export class InstallationsModule {}
