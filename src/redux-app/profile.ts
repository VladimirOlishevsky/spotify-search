import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootType } from "./store";
import { IFollowedArtists, IProfile } from "./types";

const initialState = {
    profile: [],
    // currentArtistId: '',
    // topTrackIds: ''
}

export const PROFILE_API_REDUCER_KEY = 'profileApi';


export const profileApi = createApi({
    reducerPath: PROFILE_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.spotify.com/v1`,
        // prepareHeaders: (headers, { getState }) => {
        //     const token = (getState() as RootType).auth.authToken

        //     console.log('token', token)
        //     // If we have a token set in state, let's assume that we should be passing it.
        //     if (token) {
        //         headers.set('Authorization', `Bearer ${token}`)
        //     }
        //     return headers
        // },
    }),

    endpoints: (builder) => ({
        getProfile: builder.query<IProfile, { token: string }>({
            query: (args) => {
                const { token } = args;
                return ({
                    url: 'me',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
            },
        }),
        getProfileFollowArtists: builder.query<IFollowedArtists, { token: string }>({
            query: (args) => {
                const { token } = args;
                return ({
                    url: 'me/top/artists',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                    params: {
                        // type: 'artist',
                        limit: 20,
                        time_range: 'long_term'
                    }
                });
            },
        }),
    }),
});


export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducers: {
        getProfile(state, action: PayloadAction) {
            state.profile = [];
        },
    },
});

export const { getProfile } = profileSlice.actions;
export const profileSelector = (state: RootType) => state.profile;
export const profileReducer = profileSlice.reducer;
