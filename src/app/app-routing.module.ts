import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {AuthenticationComponentComponent} from './authentication-component/authentication-component.component'
import {ReservationComponent} from "./reservation/reservation.component";

const routes: Routes = [{
  path:"login",
  component:AuthenticationComponentComponent
},
  {
    path:"reservation",
    component:ReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
