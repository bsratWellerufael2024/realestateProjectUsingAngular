import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { LoginComponentComponent } from './components/login-component/login-component.component';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponentComponent } from './components/registration-component/registration-component.component';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    RegistrationComponentComponent,
  ],

  exports: [],
})
export class AuthModule {}
