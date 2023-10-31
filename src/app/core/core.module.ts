import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonalBoardsComponent } from './components/personal-boards/personal-boards.component';


@NgModule({
  declarations: [
    CoreComponent,
    DashboardComponent,
    PersonalBoardsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
