import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import { ErrorBoundary, StoreProvider } from './providers';
import './style/global.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>,
);
