import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetyItemsRoutingModule } from './safety-items-routing.module';
import { SafetyItemsComponent } from './safety-items.component';
import { AddSafetyItemComponent } from './add-safety-item/add-safety-item.component';
import { EditSafetyItemComponent } from './edit-safety-item/edit-safety-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SafetyItemsComponent,
    AddSafetyItemComponent,
    EditSafetyItemComponent
  ],
  imports: [
    CommonModule,
    SafetyItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SafetyItemsModule { }
