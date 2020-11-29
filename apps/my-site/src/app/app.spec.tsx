import React from 'react';
import {act, render} from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

const promise = Promise.resolve({
  message: 'Welcome to api!'
});
global.fetch = jest.fn(() => {
  return Promise.resolve({
      json: () => promise
    });
  }
);

describe('App', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await act(() => promise);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    await act(() => promise);
    expect(getByText('Welcome to my-site!')).toBeTruthy();
  });
});
