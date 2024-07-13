import {
  Component,
  Input,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SwitchOperation } from '../../../share/types/common.enum';
import { CommonService } from '../../../share/services/common.service';
import { imageArray } from '../../../share/types/commom.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() imageArrays: imageArray[] = [];
  private carouselInterval!: any;

  // 將枚舉作為組件的一個公開屬性
  SwitchOperation = SwitchOperation;
  // 目前圖片的index
  currentImageIndex!: number;
  // 定時器的拖延時間
  changeImageDelay!: number;
  imageCount!: number;

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.initConfig();
    this.carouselAutoPlay();
  }

  ngOnChanges(changes: SimpleChanges) {}

  initConfig(): void {
    this.currentImageIndex = 0;
    this.changeImageDelay = 2500;

    console.error(this.imageArrays);
  }

  carouselAutoPlay() {
    this.clearcarousel();
    this.carouselInterval = setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imageArrays.length;
      this.isVaildImage();
    }, this.changeImageDelay);
  }

  // 清理定時器
  clearcarousel() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
  }

  /**
   * 上下一張按鈕
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
    this.isVaildImage();
  }

  /**
   * 判斷圖片是否有效
   * @param current
   */
  isVaildImage(): void {
    this.imageCount = this.imageArrays.length;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.imageCount - 1;
    } else if (this.currentImageIndex >= this.imageCount) {
      this.currentImageIndex = 0;
    }
  }

  changeImageBottomBar(imageNumber: number): void {
    this.currentImageIndex = imageNumber;
  }

  ngOnDestroy(): void {
    this.clearcarousel();
  }
}
