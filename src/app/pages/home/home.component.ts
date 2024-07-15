import { Component, OnInit } from '@angular/core';
import {
  BaseExpPanel,
  HomePageNewsExpPanel,
  imageArray,
  MatCardType,
} from '../../share/types/commom.interface';
import {
  ActionsType,
  MonitoringCategory,
  NewsCategory,
  PageName,
} from '../../share/types/common.enum';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  imagesSrc: imageArray[] = [];
  matCardData: MatCardType[] = [];
  matAccordionData: HomePageNewsExpPanel[] = [];
  PageName = PageName;

  // 是否顯示自身
  isShowHomeSelf: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // 直接進入系統
    sessionStorage.setItem('token', 'a');
    // 偵測路由是否於首頁
    this.showHomeSelf();
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
        newsId: '0000001',
        newsDate: '2024/07/02',
        newsCategory: NewsCategory.LATEST,
        monitoringCategory: MonitoringCategory.OPERATIONAL,
        panelTitle: '最新消息01',
        content: '國際石油價格上漲，導致全球能源市場波動。',
      },
      {
        newsId: '0000002',
        newsDate: '2024/06/30',
        newsCategory: NewsCategory.HOT,
        monitoringCategory: MonitoringCategory.OPERATIONAL,
        panelTitle: '最新消息02',
        content: '本地學校因疫情突增決定暫時遠程教學。',
      },
      {
        newsId: '0000003',
        newsDate: '2024/06/22',
        newsCategory: NewsCategory.HOT,
        monitoringCategory: MonitoringCategory.OPERATIONAL,
        panelTitle: '最新消息03',
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

  /**
   * Detect whether the router is on the home page.
   */
  showHomeSelf() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.isShowHomeSelf = event.urlAfterRedirects === '/home';
      });
  }
}
