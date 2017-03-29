import { WorkoutProPage } from './app.po';

describe('workout-pro App', () => {
  let page: WorkoutProPage;

  beforeEach(() => {
    page = new WorkoutProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
