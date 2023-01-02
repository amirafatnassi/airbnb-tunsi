import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { WelcomeComponent } from "./welcome.component";

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Welcome",
      urls: [{ title: "Welcome", url: "/welcome" }, { title: "Welcome" }],
    },
    component: WelcomeComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    WelcomeComponent
  ],
})
export class WelcomeModule {}
