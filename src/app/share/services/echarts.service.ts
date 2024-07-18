import { Injectable } from '@angular/core';
import * as echarts from 'echarts/core';
import { BarChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { pieBasicType } from '../types/common.types';

@Injectable({
  providedIn: 'root',
})
export class EchartsService {
  constructor() {
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      // charts
      BarChart,
      LineChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
    ]);
  }

  public getChartOption(): any {
    const option = {
      // 定义你的图表配置
      title: {
        text: '示例图表',
      },
      tooltip: {},
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E', 'F'],
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    return option;
  }

  public getPieOption(data: pieBasicType[]): any {
    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'By End User',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          data: data,
        },
      ],
    };
    return option;
  }
}
