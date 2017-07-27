import { ListPage } from './app.po';

describe('list App', function() {
  let page: ListPage;

  beforeEach(() => {
    page = new ListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
