import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { SwitchOperation } from '../../../share/types/common.enum';
import { CommonService } from '../../../share/services/common.service';
import { imageArray } from '../../../share/types/commom.interface';
import { flatMap } from 'rxjs';

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
  indices: number[] = [];

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    this.initConfig();
    this.carouselAutoPlay();
  }

  ngOnChanges(changes: SimpleChanges) {
    //確保當 imageArrays 真正有變化時才執行邏輯。
    if (
      changes['imageArrays'] &&
      changes['imageArrays'].currentValue !==
        changes['imageArrays'].previousValue
    ) {
      const images = changes['imageArrays'].currentValue as imageArray[];
      if (images) {
        this.indices = images.map((_, index) => index);
      } else {
        this.indices = [];
      }
    }
  }

  initConfig(): void {
    this.currentImageIndex = 0;
    this.changeImageDelay = 2500;

    console.error(this.imageArrays);
  }

  pauseAutoPlay(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.carouselInterval = null;
    }
  }

  // 恢復播放
  resumeAutoPlay() {
    this.clearcarousel();
    this.carouselAutoPlay();
  }

  // 自動播放
  carouselAutoPlay(): void {
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
    this.resumeAutoPlay();
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

  // 從下方改變視圖
  changeImageBottomBar(imageNumber: number): void {
    this.pauseAutoPlay();
    this.currentImageIndex = imageNumber;
    this.resumeAutoPlay();
  }

  ngOnDestroy(): void {
    this.clearcarousel();
  }

  get imageTransform(): string {
    return `translateX(-${this.currentImageIndex * 100}%)`;
  }
}
