import { QuestionnairePage } from './app.po';

describe('questionnaire App', function() {
  let page: QuestionnairePage;

  beforeEach(() => {
    page = new QuestionnairePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
