import { AtenaPage } from './app.po';

describe('atena App', () => {
  let page: AtenaPage;

  beforeEach(() => {
    page = new AtenaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
