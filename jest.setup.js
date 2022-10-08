// import '@testing-library/jest-native/extend-expect';

import {server} from './__mocks__/msw-server.ts';
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// for MirageJs
// global.self = global;
// global.window = {};
// global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
