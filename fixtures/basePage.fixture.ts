import HeaderComponent from '../pageObject/components/headerComponent';
import HomePage from '../pageObject/homePage';
import CookiesViews from '../pageObject/views/cookiesViews';

import { test as baseTest } from '@playwright/test';
import MoreFilterViews from '../pageObject/views/moreFilterViews';
import LocationViews from '../pageObject/views/locationViews';

const test = baseTest.extend<{

  homepage: HomePage;

  //Components
  headerComponent: HeaderComponent;

  //Views
  moreFilterViews: MoreFilterViews;
  cookiesViews: CookiesViews;
  locationViews: LocationViews;

}>({
  homepage: async ({ page }, use) => {
    await use(new HomePage(page))
  },

  //Components
  headerComponent: async ({ page }, use) => {
    await use(new HeaderComponent(page))
  },

  //Views
  cookiesViews: async ({ page }, use) => {
    await use(new CookiesViews(page))
  },
  moreFilterViews: async ({ page }, use) => {
    await use(new MoreFilterViews(page))
  },
  locationViews: async ({ page }, use) => {
    await use(new LocationViews(page))
  },
});

export default test