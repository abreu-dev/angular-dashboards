import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardNgxChartsComponent } from './dashboard-ngx-charts.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [DashboardNgxChartsComponent],
  exports: [DashboardNgxChartsComponent]
})
export class DashboardNgxChartsModule { }
