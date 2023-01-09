import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTypeLogementComponent } from "./add-type-logement/add-type-logement.component";
import { EditTypeLogementComponent } from "./edit-type-logement/edit-type-logement.component";
import { TypesLogementComponent } from "./types-logement.component";

const routes: Routes = [
  { path: '', component: TypesLogementComponent },
  { path: 'add', component: AddTypeLogementComponent },
  { path: 'update/:id', component: EditTypeLogementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesLogementRoutingModule {}
