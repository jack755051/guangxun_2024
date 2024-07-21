// angular-tool
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// page component
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DailogComponent } from './components/dailog/dailog.component';
import { CardComponent } from './components/card/card.component';
import { ErrorDailogComponent } from './components/dailog/error-dailog/error-dailog.component';
import { ExpansionPanelContentComponent } from './components/expansion-panel-content/expansion-panel-content.component';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CardTypeWithChartsComponent } from './components/card-type-with-charts/card-type-with-charts.component';

//tool
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DailogComponent,
    CardComponent,
    ErrorDailogComponent,
    ExpansionPanelContentComponent,
    CardTypeWithChartsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],

  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DailogComponent,
    CardComponent,
    ExpansionPanelContentComponent,
    CardTypeWithChartsComponent,
  ],
})
export class SharedModule {}
