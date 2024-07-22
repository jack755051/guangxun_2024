import { Component, OnInit, Input } from '@angular/core';
import { ChartSize } from '../../types/common.enum';
import { EchartsService } from '../../services/echarts.service';

@Component({
  selector: 'app-card-type-with-charts',
  templateUrl: './card-type-with-charts.component.html',
  styleUrl: './card-type-with-charts.component.scss',
})
export class CardTypeWithChartsComponent implements OnInit {
  /**
   * 引入參數
   * @type {string}  title - 圖表名稱
   * @type {ChartSize}  chartSize - 依據提供的參數，判斷是否為有解釋(explain)得layout
   * @memberof CardTypeWithChartsComponent
   */
  @Input() title!: string;
  @Input() chartSize!: ChartSize;
  @Input() chartOption!: any;
  @Input() chartDescription!: string;
  @Input() chartHaveExplain!: boolean;

  //判斷chart跟explain兩者的layout
  chartStart!: boolean;
  //依據ChartSize判斷是否存在
  isExplainExist!: boolean;
  contentId: string[] = ['chart'];

  shellWidth!: number;
  contentWidth!: number;

  option: any;
  isHaveExplain!: boolean;

  constructor(private echartsService: EchartsService) {}
  ngOnInit(): void {
    // 頁面初始化設定
    this.initConfig();
  }

  initConfig(): void {
    this.isHaveExplain = this.chartHaveExplain;

    this.shellWidth = this.chartSize * 0.8;

    // 如果 chartSize 是 Large，則添加 'explain' 到 contentId 陣列
    switch (this.chartSize) {
      case ChartSize.Large:
        this.contentId.push('explain');
        this.option = this.chartOption;
        this.contentWidth = 50;
        break;
      case ChartSize.Middle:
        this.option = this.chartOption;
        this.contentWidth = 100;
    }
  }
}
