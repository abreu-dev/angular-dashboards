import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardNgxChartsAdvancedPieComponent } from './components/advanced-pie/advanced-pie.component';
import { DashboardService } from '../../services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [DashboardNgxChartsAdvancedPieComponent],
  exports: [DashboardNgxChartsAdvancedPieComponent],
  providers: [DashboardService]
})
export class DashboardNgxChartsModule { }
