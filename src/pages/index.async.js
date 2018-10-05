import asyncComponent from 'lib/asyncComponent';

export const MainPage = asyncComponent(() => import('./MainPage'));
export const AboutPage = asyncComponent(() => import('./AboutPage'));
export const BoardPage = asyncComponent(() => import('./BoardPage'));
export const BoardDetailPage = asyncComponent(() => import('./BoardDetailPage'));
export const ClassPage = asyncComponent(() => import('./ClassPage'));
export const ClassPostPage = asyncComponent(() => import('./ClassPostPage'));
export const MarketPage = asyncComponent(() => import('./MarketPage'));
export const SellerPage = asyncComponent(() => import('./SellerPage'));
export const BoardPostPage = asyncComponent(() => import('./BoardPostPage'));
export const BoardListPage = asyncComponent(() => import('./BoardListPage'));
export const MarketRegListPage = asyncComponent(() => import('./MarketRegListPage'));
export const MarketRegPage = asyncComponent(() => import('./MarketRegPage'));
export const MyPage = asyncComponent(() => import('./MyPage'));