import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-ngx-charts-advanced-pie',
  templateUrl: './advanced-pie.component.html',
  styleUrls: ['./advanced-pie.component.css']
})
export class DashboardNgxChartsAdvancedPieComponent { 
  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  chartData = [
    
  ]
}