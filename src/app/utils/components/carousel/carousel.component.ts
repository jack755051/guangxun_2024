import { Component, Input, input, OnInit } from '@angular/core';
import { SwitchOperation } from '../../../share/types/common.enum';
import { CommonService } from '../../../share/services/common.service';
import { imageArray } from '../../../share/types/commom.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input() imageArrays: imageArray[] = [];

  // 將枚舉作為組件的一個公開屬性
  SwitchOperation = SwitchOperation;
  currentImageIndex!: number;

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.initConfig();
  }

  initConfig(): void {
    this.currentImageIndex = 0;
    this.imageArrays.push();
  }

  /**
   * 上下一張
   * @param imageOperationType
   */
  changeImageMiddleBtn(imageOperationType: SwitchOperation): void {
    switch (imageOperationType) {
      case SwitchOperation.previous:
        this.currentImageIndex -= 1;
        break;
      case SwitchOperation.next:
        this.currentImageIndex += 1;
        break;
    }
    this.isVaildImage(this.currentImageIndex);
  }

  isVaildImage(current: number): void {
    let imageCount = this.imageArrays.length - 1;
    if (current < 0) {
      this.currentImageIndex = imageCount;
    }

    if (current > imageCount) {
      this.currentImageIndex = 0;
    }
  }

  changeImageBottomBar(imageNumber: number): void {}
}
