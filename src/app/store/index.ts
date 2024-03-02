import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import { pollApi } from '../services/polls'
import { authApi } from '../services/auth'
import authReducer from '../features/auth/auth.slice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const reducers = combineReducers({
  auth: authReducer,

  [pollApi.reducerPath]: pollApi.reducer,
  [authApi.reducerPath]: authApi.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(pollApi.middleware)
      .concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
