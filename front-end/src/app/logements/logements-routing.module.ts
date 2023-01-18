import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddLogementComponent } from "./add-logement/add-logement.component";
import { EditLogementComponent } from "./edit-logement/edit-logement.component";
import { LogementsComponent } from "./logements.component";
import { ShowLogementComponent } from "./show-logement/show-logement.component";

const routes: Routes = [
  { path: "", component: LogementsComponent },
  { path: "add", component: AddLogementComponent },
  { path: "show/:id", component: ShowLogementComponent },
  { path: "update/:id", component: EditLogementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogementsRoutingModule {}
