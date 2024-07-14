import { Component, OnInit } from '@angular/core';
import {
  Accordion,
  imageArray,
  MatCardType,
} from '../../share/types/commom.interface';
import { ActionsType, PageName } from '../../share/types/common.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  imagesSrc: imageArray[] = [];
  matCardData: MatCardType[] = [];
  matAccordionData: Accordion[] = [];
  PageName = PageName;

  constructor() {}

  ngOnInit(): void {
    // 直接進入系統
    sessionStorage.setItem('token', 'a');
    this.matCardData = [
      {
        headerTitle: 'GC-IP50-W288',
        headerSubTitle: '2MP電動變焦',
        image: {
          imageSrc: 'image-no-found.png',
          imageAlt: 'image-no-found.png',
        },
        content: '',
        action: ActionsType.enter,
      },
      {
        headerTitle: 'GC-IP50-W288',
        headerSubTitle: '2MP電動變焦',
        image: {
          imageSrc: 'image-no-found.png',
          imageAlt: 'image-no-found.png',
        },
        content: '',
        action: ActionsType.enter,
      },
      {
        headerTitle: 'GC-IP50-W288',
        headerSubTitle: '2MP電動變焦',
        image: {
          imageSrc: 'image-no-found.png',
          imageAlt: 'image-no-found.png',
        },
        content: '',
        action: ActionsType.enter,
      },
      {
        headerTitle: 'GC-IP50-W288',
        headerSubTitle: '2MP電動變焦',
        image: {
          imageSrc: 'image-no-found.png',
          imageAlt: 'image-no-found.png',
        },
        content: '',
        action: ActionsType.enter,
      },
      {
        headerTitle: 'GC-IP50-W288',
        headerSubTitle: '2MP電動變焦',
        image: {
          imageSrc: 'image-no-found.png',
          imageAlt: 'image-no-found.png',
        },
        content: '',
        action: ActionsType.enter,
      },
      {
        headerTitle: 'GC-IP50-W288',
        headerSubTitle: '2MP電動變焦',
        image: {
          imageSrc: 'image-no-found.png',
          imageAlt: 'image-no-found.png',
        },
        content: '',
        action: ActionsType.enter,
      },
      {
        headerTitle: 'GC-IP50-W288',
        headerSubTitle: '2MP電動變焦',
        image: {
          imageSrc: 'image-no-found.png',
          imageAlt: 'image-no-found.png',
        },
        content: '',
        action: ActionsType.enter,
      },
    ];
    this.matAccordionData = [
      {
        panelTitle: '最新消息01',
        panelDescription: '2024/08/11',
        content: '國際石油價格上漲，導致全球能源市場波動。',
      },
      {
        panelTitle: '最新消息02',
        panelDescription: '2024/08/05',
        content: '本地學校因疫情突增決定暫時遠程教學。',
      },
      {
        panelTitle: '最新消息03',
        panelDescription: '2024/08/01',
        content: '科技巨頭發布最新智能手機，創新功能引領潮流。',
      },
    ];

    this.initConfig();
  }

  initConfig(): void {
    this.buildCarouselImage(4);
    // this.buildCardData();
    this.PageName = PageName;
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

  // buildCardData(): void {
  //   this.cardSource.map((item) => this.matCardData.push(item));
  // }
}
