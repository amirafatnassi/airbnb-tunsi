import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesContratRoutingModule } from './types-contrat-routing.module';
import { TypesContratComponent } from './types-contrat.component';
import { AddTypeContratComponent } from './add-type-contrat/add-type-contrat.component';
import { EditTypeContratComponent } from './edit-type-contrat/edit-type-contrat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TypesContratComponent,
    AddTypeContratComponent,
    EditTypeContratComponent
  ],
  imports: [
    CommonModule,
    TypesContratRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TypesContratModule { }
