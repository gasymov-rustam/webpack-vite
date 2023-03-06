import '@testing-library/jest-dom';
import { RenderOptions, render } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';

import { StoreProvider } from '../../src/providers';

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => <StoreProvider>{children}</StoreProvider>;

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
