import { Component, Input } from '@angular/core';

import { DashboardService } from '../../../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-ngx-charts-advanced-pie',
  templateUrl: './advanced-pie.component.html',
  styleUrls: ['./advanced-pie.component.css']
})
export class DashboardNgxChartsAdvancedPieComponent { 
  chartData = [];

  view: any[] = [700, 400];
  gradient: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  public showSettings: boolean = false;

  @Input()
  public chartTitle: string;

  constructor(private dashboardService: DashboardService) {
    this.chartData = this.dashboardService.get().values;
  }

  public toggleSettings(): void {
    this.showSettings = !this.showSettings;
  }
}