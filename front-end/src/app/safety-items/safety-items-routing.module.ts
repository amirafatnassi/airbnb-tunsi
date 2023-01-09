import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSafetyItemComponent } from './add-safety-item/add-safety-item.component';
import { EditSafetyItemComponent } from './edit-safety-item/edit-safety-item.component';
import { SafetyItemsComponent } from './safety-items.component';

const routes: Routes = [
  { path: '', component: SafetyItemsComponent },
  { path: 'add', component: AddSafetyItemComponent },
  { path: 'update/:id', component: EditSafetyItemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafetyItemsRoutingModule { }
