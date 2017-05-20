import { TwopixFrontPage } from './app.po';

describe('twopix-front App', () => {
  let page: TwopixFrontPage;

  beforeEach(() => {
    page = new TwopixFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
