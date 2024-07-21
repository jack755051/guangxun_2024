import { Component, OnInit } from '@angular/core';
import { EchartsService } from '../../share/services/echarts.service';
import { ChartSize } from '../../share/types/common.enum';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent implements OnInit {
  //傳入card with charts的data
  private _cardWithChartsSize!: ChartSize;
  cardWithChartsTitle!: string;
  cardWithChartsExplain!: boolean;

  // 圖表跟文字描述
  option: any;
  description!: string;

  constructor(private echartsService: EchartsService) {
    this.cardWithChartsSize = ChartSize.Middle;
  }

  ngOnInit(): void {
    this.echartConfig();
    this.cardWithChartsTitle = 'By End User';
  }

  // 圖表參數
  echartConfig(): void {
    this.option = this.echartsService.getPieOption([
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
    this.description = '1122';
  }

  //getter
  get cardWithChartsSize(): ChartSize {
    return this._cardWithChartsSize;
  }

  //setter
  set cardWithChartsSize(size: ChartSize) {
    this._cardWithChartsSize = size;
    this.cardWithChartsExplain = size === ChartSize.Large;
  }
}
