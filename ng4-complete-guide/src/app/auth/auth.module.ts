import { NgModule } from '@angular/core';
import {SingupComponent} from './singup/singup.component';
import {SinginComponent} from './singin/singin.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [
    SingupComponent,
    SinginComponent
  ]
})
export class AuthModule { }
