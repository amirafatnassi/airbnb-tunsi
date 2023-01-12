import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesLogementRoutingModule } from './types-logement-routing.module';
import { TypesLogementComponent } from './types-logement.component';
import { AddTypeLogementComponent } from './add-type-logement/add-type-logement.component';
import { EditTypeLogementComponent } from './edit-type-logement/edit-type-logement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    TypesLogementComponent,
    AddTypeLogementComponent,
    EditTypeLogementComponent
  ],
  imports: [
    CommonModule,
    TypesLogementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class TypesLogementModule { }
