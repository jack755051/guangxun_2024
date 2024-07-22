import { Component, OnInit } from '@angular/core';
import { EchartsService } from '../../share/services/echarts.service';
import { ChartSize } from '../../share/types/common.enum';
import { ChartConfig } from '../../share/types/commom.interface';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent implements OnInit {
  chartsConfig: { [key: string]: ChartConfig } = {
    byEndUser: {
      size: ChartSize.Middle,
      explain: false,
      description: '',
      title: 'By End User', // 直接在这里定义标题
    },
    globalCCTVShare: {
      size: ChartSize.Middle,
      explain: false,
      description: '',
      title: 'Global CCTV Market Share',
    },
  };

  // chartsConfig: { [key: string]: ChartConfig } = {
  //   byEndUser: {
  //     size: ChartSize.Middle,
  //     explain: false,
  //     title: 'By End User', // 直接在这里定义标题
  //   },
  //   globalCCTVShare: {
  //     size: ChartSize.Middle,
  //     explain: false,
  //     description: {
  //       title: 'China CCTV Market Share,2021',
  //       content:
  //         "By region, the market of CCTV camera has been analyzed across five major regions, North America, Europe, Asia Pacific, the Middle East & Africa, and South America.Asia Pacific is expected to dominate the global market owing to increasing government initiatives and investment in smart city projects. According to the World Construction Report in 2021, investments in China related to smart city projects related to advanced technologies reached around USD 30 billion in 2021 and are expected to reach USD 38.92 billion. Rising investment in smart cities has created a massive demand for the product widely to protect government assets. Also, according to a UN estimate report, around 54% of the globe's cameras are in China in 2021, which equals to around 540 million surveillance systems. China has around 1.46 billion people and has around 372.8 cameras per 1,000 individuals.",
  //       source:
  //         'https://www.fortunebusinessinsights.com/cctv-camera-market-107115',
  //     },
  //     title: 'China CCTV Market Share,2021',
  //   },
  // };

  // 圖表跟文字描述
  option: any;
  option2: any;

  constructor(private echartsService: EchartsService) {}

  ngOnInit(): void {
    this.echartConfig();
    this.updateChartConfig('byEndUser', ChartSize.Large);
    // this.updateChartConfig('globalCCTVShare', ChartSize.Middle);
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
    this.option2 = this.echartsService.getPieOption([
      {
        value: 2,
        name: 'A',
      },
      {
        value: 5,
        name: 'B',
      },
      {
        value: 1,
        name: 'C',
      },
    ]);
  }

  updateChartConfig(key: string, size: ChartSize): void {
    let config = this.chartsConfig[key];
    config.size = size;
    config.explain = size === ChartSize.Large;
    config.description =
      size === ChartSize.Large ? 'Default description for Large size' : '';
  }
}
