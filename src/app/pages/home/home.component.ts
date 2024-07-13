import { Component, OnInit } from '@angular/core';
import { imageArray } from '../../share/types/commom.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  imagesSrc: imageArray[] = [];

  constructor() {}

  ngOnInit(): void {
    // 直接進入系統
    sessionStorage.setItem('token', 'a');
    this.initConfig();
  }

  initConfig(): void {
    this.buildCarouselImage(4);
  }

  /**
   * 建立輪播圖照片
   * @param imageAmount
   */
  buildCarouselImage(imageAmount: number): void {
    for (let i = 0; i < imageAmount; i++) {
      this.imagesSrc.push({
        imageSrc: `assets/images/image/carousel-0${i}.jpg`,
        imageAlt: `Carousel Image ${i}`,
      });
    }
  }
}
