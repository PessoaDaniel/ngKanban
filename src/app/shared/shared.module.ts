import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './components/error/error404/error404.component';
import { Error500Component } from './components/error/error500/error500.component';
import { Error403Component } from './components/error/error403/error403.component';
import { Error401Component } from './components/error/error401/error401.component';
import { HeadbarComponent } from './layout/headbar/headbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Error404Component,
    Error500Component,
    Error403Component,
    Error401Component,
    HeadbarComponent,
    NavbarComponent
  ],
  exports: [
    HeadbarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
