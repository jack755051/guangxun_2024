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
import { format } from 'path';

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
        formatter: function (params: any) {
          // 使用 params.color 来获取当前扇区的颜色
          return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>${params.name} : ${params.percent}% <br/> <span style="margin-left:15px;">數值為${params.value}</span>`;
        },
        borderColor: '#69AFFF',
        borderWidth: 5,
        textStyle: {
          fontStyle: 'oblique',
        },
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        position: 'right',
      },
      legend: {
        // top: '5%',
        // left: 'center',
        top: 'center',
        left: 'left',
        orient: 'vertical',
      },
      series: [
        {
          name: 'By End User',
          type: 'pie',
          radius: ['40%', '80%'],
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
              fontSize: 25,
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
