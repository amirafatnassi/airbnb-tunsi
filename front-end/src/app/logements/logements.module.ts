import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LogementsRoutingModule } from "./logements-routing.module";
import { LogementsComponent } from "./logements.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";
import { AddLogementComponent } from "./add-logement/add-logement.component";
import { EditLogementComponent } from "./edit-logement/edit-logement.component";
import { NgxFileDropModule } from 'ngx-file-drop';
import { ShowLogementComponent } from './show-logement/show-logement.component';

@NgModule({
  declarations: [
    LogementsComponent,
    AddLogementComponent,
    EditLogementComponent,
    ShowLogementComponent,
  ],
  imports: [
    CommonModule,
    LogementsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxFileDropModule
  ],
})
export class LogementsModule {}
