import {setupServer} from 'msw/node';
import {handlers} from '../__mocks__/handlers';

export const server = setupServer(...handlers);

describe('Example', () => {
  beforeAll(async () => {
    server.listen();
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should have welcome screen', async () => {
    await element(by.id('login-submit-btn')).tap();
  });

  // it('should show hello screen after tap', async () => {
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });
  //
  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
