import { Component, OnInit, Input } from '@angular/core';
import { MatCardType } from '../../types/commom.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() matCardData: MatCardType[] = [];

  constructor() {}

  ngOnInit(): void {}
}
