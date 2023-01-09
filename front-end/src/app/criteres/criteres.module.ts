import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriteresRoutingModule } from './criteres-routing.module';
import { CriteresComponent } from './criteres.component';
import { AddCritereComponent } from './add-critere/add-critere.component';
import { EditCritereComponent } from './edit-critere/edit-critere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CriteresComponent,
    AddCritereComponent,
    EditCritereComponent
  ],
  imports: [
    CommonModule,
    CriteresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CriteresModule { }
