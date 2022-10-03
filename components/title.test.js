import {screen, render, waitForElement, waitFor, fireEvent} from '@testing-library/react-native';
import React from 'react';

import Title from './title';

describe('Title component', () => {
  it('render successfully', async () => {
    render(<Title />);

    const btn = await screen.getByTestId('login-submit-btn');
    fireEvent.press(btn);
  });
});
