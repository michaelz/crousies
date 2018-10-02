import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceModule } from '../../shared/interface/interface.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    InterfaceModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }
