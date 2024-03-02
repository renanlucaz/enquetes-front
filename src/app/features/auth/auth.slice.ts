import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string
  avatar: string
  email: string
  name: string
}

interface AuthState {
  token: string | null
  isLogged: boolean
  user: User | null
}

const initialState: AuthState = {
  token: null,
  isLogged: false,
  user: null
}

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ jwtToken: string, user: User }>) => {
      const { jwtToken, user } = action.payload

      state.token = jwtToken
      state.isLogged = true
      state.user = user
    },
    logout: () => {
      return initialState
    }
  }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
