import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOptionComponent } from './add-option/add-option.component';
import { EditOptionComponent } from './edit-option/edit-option.component';
import { OptionsComponent } from './options.component';


const routes: Routes = [
  { path: '', component: OptionsComponent },
  { path: 'add', component: AddOptionComponent },
  { path: 'update/:id', component: EditOptionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule { }
