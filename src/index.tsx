import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './app/routes'
import { ThemeProvider } from './app/themes/ThemeProvider'
import { HashRouter } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { SnackbarProvider } from 'notistack'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GoogleOAuthProvider clientId='851751328045-s9kd816afoc3vfe14de8chcafd3obvts.apps.googleusercontent.com'>
        <SnackbarProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <HashRouter>
                <Routes />
              </HashRouter>
            </PersistGate>
          </Provider>
        </SnackbarProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
