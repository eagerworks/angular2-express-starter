import { Angular2ExpressStarterPage } from './app.po';

describe('angular2-express-starter App', function() {
  let page: Angular2ExpressStarterPage;

  beforeEach(() => {
    page = new Angular2ExpressStarterPage();
  });

  it('should display message saying login', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });
});
