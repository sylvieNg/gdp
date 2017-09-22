import { GdpPage } from './app.po';

describe('gdp App', function() {
  let page: GdpPage;

  beforeEach(() => {
    page = new GdpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
