import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  reducerPath: 'main',
  tagTypes: [],
  endpoints: (build) => ({
    postAiText: build.mutation({
      query: (payload) => ({
        url: 'openai/text',
        method: 'POST',
        body: payload,
      }),
    }),
    postLogin: build.mutation({
      query: (payload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload,
      }),
    }),
    postSignUp: build.mutation({
      query: (payload) => ({
        url: 'auth/signup',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const {
  usePostAiTextMutation,
  usePostLoginMutation,
  usePostSignUpMutation,
} = api;
