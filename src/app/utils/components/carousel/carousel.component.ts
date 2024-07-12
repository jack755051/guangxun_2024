import { Component, OnInit } from '@angular/core';
import { SwitchOperation } from '../../../share/types/common.enum';
import { CommonService } from '../../../share/services/common.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  // 將枚舉作為組件的一個公開屬性
  SwitchOperation = SwitchOperation;

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {}

  changeImage(imageOperationType: SwitchOperation): void {
    switch (imageOperationType) {
      case SwitchOperation.previous:
        break;
      case SwitchOperation.next:
        break;
    }
  }
}
