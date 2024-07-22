import { Component, Input, OnInit } from '@angular/core';
import { ChartDescription } from '../../../types/commom.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent implements OnInit {
  @Input() description!: ChartDescription;
  constructor() {}

  ngOnInit(): void {}
}
