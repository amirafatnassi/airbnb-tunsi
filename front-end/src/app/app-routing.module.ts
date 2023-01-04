import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";

const routes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "welcome",
        loadChildren: () =>
          import("./welcome/welcome.module").then((m) => m.WelcomeModule),
      },
      {
        path: "about",
        loadChildren: () =>
          import("./about/about.module").then((m) => m.AboutModule),
      },
      {
        path: "component",
        loadChildren: () =>
          import("./component/component.module").then(
            (m) => m.ComponentsModule
          ),
      },
    
    ],
  },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {
    path: "**",
    redirectTo: "/starter",
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

