import { ActionsType, MonitoringCategory, NewsCategory } from './common.enum';

// ==== login-page ====
export interface Imageurl {
  loginImageUrl: string;
  registerImageUrl: string;
}

// ==== header-page ====
export interface HeaderPageLink {
  pageName: string;
  pageRouterLink: string;
  isHasChild: boolean;
}

export interface imageArray {
  imageSrc: string;
  imageAlt: string;
}

// ==== card-page ====

export interface MatCardType {
  headerTitle: string;
  headerSubTitle?: string;
  image: imageArray;
  content: string;
  action: ActionsType;
}

// expansion-panel 展開面板
export interface BaseExpPanel {
  panelTitle: string;
  content: string;
}

export interface HomePageNewsExpPanel extends BaseExpPanel {
  newsId?: string;
  newsDate: string;
  newsCategory?: NewsCategory;
  monitoringCategory?: MonitoringCategory;
}
