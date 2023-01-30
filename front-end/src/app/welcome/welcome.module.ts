import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome.component";
import { SearchPipe } from "../pipes/search.pipe";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { ShowLogementComponent } from "./show-logement/show-logement.component";
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ReservationComponent } from './reservation/reservation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WelcomeRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    WelcomeComponent,ShowLogementComponent,
     SearchPipe,
     ReservationComponent
    ],
  providers: [ BsDatepickerConfig],

})
export class WelcomeModule {}
