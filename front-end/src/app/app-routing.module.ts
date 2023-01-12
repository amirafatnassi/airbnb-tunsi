import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "about",
        loadChildren: () =>
          import("./about/about.module").then((m) => m.AboutModule),
      },
      {
        path: "logements",
        loadChildren: () =>
          import("./logements/logements.module").then((m) => m.LogementsModule),
      },
      {
        path: "installations",
        loadChildren: () =>
          import("./installations/installations.module").then(
            (m) => m.InstallationsModule
          ),
      },
      {
        path: "options",
        loadChildren: () =>
          import("./options/options.module").then((m) => m.OptionsModule),
      },
      {
        path: "criteres",
        loadChildren: () =>
          import("./criteres/criteres.module").then((m) => m.CriteresModule),
      },
      {
        path: "types_logements",
        loadChildren: () =>
          import("./types-logement/types-logement.module").then(
            (m) => m.TypesLogementModule
          ),
      },
      {
        path: "types_contrats",
        loadChildren: () =>
          import("./types-contrat/types-contrat.module").then(
            (m) => m.TypesContratModule
          ),
      },
      {
        path: "safety_items",
        loadChildren: () =>
          import("./safety-items/safety-items.module").then(
            (m) => m.SafetyItemsModule
          ),
      },
    ],
  },
  {
    path: "welcome",
    loadChildren: () =>
      import("./welcome/welcome.module").then((m) => m.WelcomeModule),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  { path: "**", redirectTo: "/starter" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
