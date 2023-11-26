import MainPage from "../MainPage/MainPage";
import AnalyticsPage from "../AnalyticsPage/AnalyticsPage";

export const AppRoute = {
  MAIN : 'main',
  ANALYTICS : 'analytics'
}

export const RoutePath = {
  [AppRoute.MAIN]: '/',
  [AppRoute.ANALYTICS]: '/analytics/',
};

export const routeConfig = {
  [AppRoute.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoute.ANALYTICS]: {
    path: RoutePath.analytics,
    element: <AnalyticsPage />,
  },
};
