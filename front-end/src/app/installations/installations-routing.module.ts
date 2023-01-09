import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstallationComponent } from './add-installation/add-installation.component';
import { EditInstallationComponent } from './edit-installation/edit-installation.component';
import { InstallationsComponent } from './installations.component';

const routes: Routes = [
  { path: '', component: InstallationsComponent },
  { path: 'add', component: AddInstallationComponent },
  { path: 'update/:id', component: EditInstallationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallationsRoutingModule { }
