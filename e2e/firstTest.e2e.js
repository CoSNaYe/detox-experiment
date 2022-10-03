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
});
