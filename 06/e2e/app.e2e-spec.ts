import { OnchangePage } from './app.po';

describe('onchange App', function() {
  let page: OnchangePage;

  beforeEach(() => {
    page = new OnchangePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
