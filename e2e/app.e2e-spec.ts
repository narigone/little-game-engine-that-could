import { LittleGameEngineThatCouldPage } from './app.po';

describe('little-game-engine-that-could App', () => {
  let page: LittleGameEngineThatCouldPage;

  beforeEach(() => {
    page = new LittleGameEngineThatCouldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
