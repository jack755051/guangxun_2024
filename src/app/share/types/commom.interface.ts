import { ActionsType } from './common.enum';

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
