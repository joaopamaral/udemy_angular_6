import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SingupComponent} from './singup/singup.component';
import {SinginComponent} from './singin/singin.component';

const authRoutes: Routes = [
  { path: 'signup', component: SingupComponent },
  { path: 'signin', component: SinginComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule { }

