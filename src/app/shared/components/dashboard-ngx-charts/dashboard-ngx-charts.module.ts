import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardNgxChartsAdvancedPieComponent } from './components/advanced-pie/advanced-pie.component';
import { OutsideClickDirective } from '../../directives/outside-click.directive';
import { DashboardService } from '../../services/dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DashboardNgxChartsAdvancedPieComponent, OutsideClickDirective],
  exports: [DashboardNgxChartsAdvancedPieComponent],
  providers: [DashboardService]
})
export class DashboardNgxChartsModule { }
