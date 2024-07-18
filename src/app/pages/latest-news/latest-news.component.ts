import { Component, OnInit } from '@angular/core';
import { EchartsService } from '../../share/services/echarts.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent implements OnInit {
  options: any;
  options2: any;
  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartConfig();
  }

  // 圖表參數
  echartConfig(): void {
    // this.options = this.echartsService.getChartOption();
    this.options2 = this.echartsService.getPieOption([
      {
        value: 43,
        name: 'Goverment and Public',
      },
      {
        value: 37,
        name: 'Commerical',
      },
      {
        value: 20,
        name: 'Residential',
      },
    ]);
  }
}
