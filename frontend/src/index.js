import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'redux/store';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import Loader from 'components/reusableComponents/Loader';
import App from 'components/App';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <App />
            </ThemeProvider>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
