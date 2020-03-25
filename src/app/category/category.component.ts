import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Action', 'Drame', 'Comedie', 'Romantique', 'Noël'];
  barChartType:  string = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [2500, 1973, 2000, 2580, 1998], label: 'Best Category' }
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
