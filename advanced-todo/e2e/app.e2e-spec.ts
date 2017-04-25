import { AdvancedTodoPage } from './app.po';

describe('advanced-todo App', () => {
  let page: AdvancedTodoPage;

  beforeEach(() => {
    page = new AdvancedTodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
