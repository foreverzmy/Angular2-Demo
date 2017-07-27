import { ThemeAppPage } from './app.po';

describe('theme-app App', () => {
  let page: ThemeAppPage;

  beforeEach(() => {
    page = new ThemeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
