import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {AuthenticationComponentComponent} from './authentication-component/authentication-component.component'

const routes: Routes = [{
  path:"login",
  component:AuthenticationComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
