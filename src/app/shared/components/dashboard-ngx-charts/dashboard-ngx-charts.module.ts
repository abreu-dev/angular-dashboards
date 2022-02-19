import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardNgxChartsAdvancedPieComponent } from './components/advanced-pie/advanced-pie.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [DashboardNgxChartsAdvancedPieComponent],
  exports: [DashboardNgxChartsAdvancedPieComponent]
})
export class DashboardNgxChartsModule { }
