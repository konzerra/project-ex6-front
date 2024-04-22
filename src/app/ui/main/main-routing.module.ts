import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "../../auth_guard/auth.guard";
import {authorities} from "../auth/Authorities";

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: '/dashboard' },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'scoring', component: ScoringComponent,
  //   children: [
  //     { path: 'secondInput', component: SecondInputComponent },
  //     { path: 'result', component: ResultScoringComponent }
  //   ]
  // },
  // { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
