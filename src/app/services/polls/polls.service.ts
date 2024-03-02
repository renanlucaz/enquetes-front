import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '../../store/baseQuery'
import { type Poll } from './polls.interface'

export const pollApi = createApi({
  reducerPath: 'pollApi',
  baseQuery,
  tagTypes: ['Polls', 'PollDetails'],
  endpoints: (builder) => ({
    getPollsList: builder.query<Poll[], string>({
      query: () => ({
        url: '/polls',
        method: 'GET'
      }),
      providesTags: ['Polls']
    }),
    getPollDetails: builder.query<{ poll: Poll }, { pollId: string }>({
      query: ({ pollId }) => ({
        url: `/polls/${pollId}`,
        method: 'GET'
      }),
      providesTags: ['PollDetails']
    }),
    createPoll: builder.mutation<unknown, unknown>({
      query: ({ body }) => ({
        url: '/polls',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Polls']
    }),
    voteOnPoll: builder.mutation<unknown, unknown>({
      query: ({ pollId, pollOptionId, createdById }) => ({
        url: `/polls/${pollId}/votes`,
        method: 'POST',
        body: {
          pollOptionId,
          createdById
        }
      }),
      invalidatesTags: ['Polls', 'PollDetails']
    })
  })
})

export const { useGetPollsListQuery, useCreatePollMutation, useVoteOnPollMutation, useGetPollDetailsQuery } = pollApi
