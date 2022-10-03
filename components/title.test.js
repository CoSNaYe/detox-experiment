import {screen, render, waitForElement, waitFor, fireEvent} from '@testing-library/react-native';
import React from 'react';

// import {makeServer} from '../__tests__/server';
import Title from './title';

// let server;

beforeEach(() => {
  // server = makeServer({environment: 'test'});
});

afterEach(() => {
  // server.shutdown();
});

describe('Title component', () => {
  it('render successfully', async () => {
    const {findByTestId} = render(<Title />);

    // const btn = await findByTestId('login-submit-btn');
    const btn = await screen.getByTestId('login-submit-btn');
    // console.log('btn', btn);
    fireEvent.press(btn);
  });
});
