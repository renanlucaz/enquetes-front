import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type RootState } from '.'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: async (headers, { getState }) => {
    const { token } = (
      getState() as RootState
    ).auth

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
      headers.set('Access-Control-Allow-Origin', '*')
    }

    return headers
  }
})
