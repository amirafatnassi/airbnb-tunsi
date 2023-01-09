import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCritereComponent } from './add-critere/add-critere.component';
import { CriteresComponent } from './criteres.component';
import { EditCritereComponent } from './edit-critere/edit-critere.component';


const routes: Routes = [
  { path: '', component: CriteresComponent },
  { path: 'add', component: AddCritereComponent },
  { path: 'update/:id', component: EditCritereComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriteresRoutingModule { }
