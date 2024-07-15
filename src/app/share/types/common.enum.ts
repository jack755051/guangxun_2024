export enum PageName {
  'latest-news' = '最新消息',
  'about-guangxun' = '關於我們',
  'technical-support' = '產品中心',
  'faq' = '技術支持',
  'product-center' = '常見問題',
  'manage' = '管理專區',
}

export enum LoginPageType {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
}

export enum SwitchOperation {
  previous = 'previous',
  next = 'next',
}

export enum FormErrorMessages {
  Required = '必填',
  MinLength = '最小長度',
  MaxLength = '最大長度',
  Email = '信箱格式',
  Regex = '格式錯誤',
}

// 新聞種類
export enum MonitoringCategory {
  IT_INFRASTRUCTURE = 'IT基礎設施',
  NETWORK_SECURITY = '網絡安全',
  PHYSICAL_SECURITY = '物理安全',
  ENVIRONMENTAL = '環境監控',
  HEALTH_MONITORING = '健康監控',
  PERFORMANCE = '性能監控',
  OPERATIONAL = '運營監控',
  QUALITY_CONTROL = '質量控制',
  CYBER_SECURITY = '資訊安全',
}

// 新聞類型
export enum NewsCategory {
  LATEST = '最新',
  HOT = '熱門',
}

export enum RegexErrorType {
  regexLoginPagePassword = '',
}

// ==== card-page ====
export enum ActionsType {
  enter = '進入',
}
