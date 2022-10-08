import {setupServer} from 'msw/node';
import {device, element, by} from 'detox';
import {createServer} from 'miragejs';
import {BatchInterceptor} from '@mswjs/interceptors';
import {XMLHttpRequestInterceptor} from '@mswjs/interceptors/lib/interceptors/XMLHttpRequest';
import MockAdapter from 'axios-mock-adapter';

import {handlers as mswHandlers} from '../__mocks__/msw-handlers';
import {server} from '../__mocks__/express';

import {axiosInstance} from '../components/title';
const mock = new MockAdapter(axiosInstance);

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('api mocking failed by msw official setup', async () => {
    const server = setupServer(...mswHandlers);
    server.listen();

    await element(by.id('login-submit-btn')).tap();
  });

  it('api mocking failed by msw interceptors', async () => {
    const interceptor = new BatchInterceptor({
      name: 'my-interceptor',
      interceptors: [new XMLHttpRequestInterceptor()],
    });

    interceptor.apply();

    interceptor.on('request', requestInfo => {
      console.log('=== requestInfo ===', requestInfo);
    });

    await element(by.id('login-submit-btn')).tap();
  });

  it('api mocking failed by axios-mock-adapter', async () => {
    mock
      .onPost('https://api-staging.wordup.com.tw/api/v1/auth/sign_in')
      .reply(200, {
        email: 'test@test.com.tw',
        name: 'test user name',
      });

    await element(by.id('login-submit-btn')).tap();
  });

  it('api mocking successfully by local express server', async () => {
    server.post('/api/v1/auth/sign_in', (req, res) => {
      res.json({
        name: 'by express',
        email: 'test@test.com.tw',
      });
    });

    await element(by.id('login-submit-btn')).tap();
  });
});
