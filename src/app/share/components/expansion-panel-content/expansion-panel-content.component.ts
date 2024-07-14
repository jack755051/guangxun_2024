import { Component, Input, OnInit } from '@angular/core';
import { MonitoringCategory } from '../../types/common.enum';

@Component({
  selector: 'app-expansion-panel-content',
  templateUrl: './expansion-panel-content.component.html',
  styleUrl: './expansion-panel-content.component.scss',
})
export class ExpansionPanelContentComponent implements OnInit {
  @Input() newsDate!: string;
  @Input() monitoringCategory!: MonitoringCategory;
  @Input() content!: string;

  MonitoringCategory = MonitoringCategory;

  constructor() {}

  ngOnInit(): void {
    this.initConfig();
  }

  initConfig(): void {
    this.MonitoringCategory = MonitoringCategory;
  }
}
