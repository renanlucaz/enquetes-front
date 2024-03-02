import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../../../app/store/baseQuery'

interface AuthResponse {
  token: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, unknown>({
      query: ({ payload }) => ({
        url: '/auth',
        method: 'POST',
        body: {
          email: payload.email,
          avatar: payload.avatar,
          name: payload.name
        }
      })
    })
  })
})

export const { useLoginMutation } = authApi
