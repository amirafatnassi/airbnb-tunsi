import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTypeContratComponent } from "./add-type-contrat/add-type-contrat.component";
import { EditTypeContratComponent } from "./edit-type-contrat/edit-type-contrat.component";
import { TypesContratComponent } from "./types-contrat.component";

const routes: Routes = [
  { path: "", component: TypesContratComponent },
  { path: "add", component: AddTypeContratComponent },
  { path: "update/:id", component: EditTypeContratComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesContratRoutingModule {}
