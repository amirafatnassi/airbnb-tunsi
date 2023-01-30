import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome.component";
import { ShowLogementComponent } from "./show-logement/show-logement.component";
import { ReservationComponent } from "./reservation/reservation.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "show/:id", component: ShowLogementComponent },
  { path: "reserver/:id", component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
