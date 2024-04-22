import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthMainComponent} from "./auth-main/auth-main.component";


const routes: Routes = [
  { path: '', component: AuthMainComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
