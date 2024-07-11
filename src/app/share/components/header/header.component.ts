import { Component, OnInit } from '@angular/core';
import { HeaderPageLink } from '../../types/commom.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  pageLinkList!: HeaderPageLink[];
  constructor() {}

  ngOnInit(): void {
    this.initPage();
  }

  initPage() {
    this.pageLinkList = [
      {
        pageName: '最新消息',
        pageRouterLink: 'latest-news',
        isHasChild: false,
      },
      {
        pageName: '關於我們',
        pageRouterLink: 'about-guangxun',
        isHasChild: false,
      },
      {
        pageName: '產品中心',
        pageRouterLink: 'technical-support',
        isHasChild: false,
      },
      {
        pageName: '技術支持',
        pageRouterLink: 'faq',
        isHasChild: false,
      },
      {
        pageName: '常見問題',
        pageRouterLink: 'product-center',
        isHasChild: false,
      },
      {
        pageName: '管理專區',
        pageRouterLink: 'manage',
        isHasChild: false,
      },
    ];
  }
}
