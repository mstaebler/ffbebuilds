import { FfbebuildsPage } from './app.po';

describe('ffbebuilds App', () => {
  let page: FfbebuildsPage;

  beforeEach(() => {
    page = new FfbebuildsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
