import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROFILE_TOP_REQUEST, TIME_RANGE } from "./constants";
import { RootType } from "./store";
import { IFollowedArtists, IProfile, ITopListenedTracks } from "./types";

const initialState = {
    profile: [],
    // currentArtistId: '',
    // topTrackIds: ''
}

export const PROFILE_API_REDUCER_KEY = 'profileApi';


export const profileApi = createApi({
    reducerPath: PROFILE_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.spotify.com/v1/me`,
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
                    url: '',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
            },
        }),
        getProfileFollowedArtists: builder.query<IFollowedArtists, { 
            token: string, 
            requestType: PROFILE_TOP_REQUEST, 
            timeRange: TIME_RANGE
        }>({
            query: (args) => {
                const { token, requestType, timeRange } = args;
                return ({
                    url: `top/${requestType}`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                    params: {
                        limit: 20,
                        time_range: `${timeRange}`
                    }
                });
            },
        }),
        getProfileListenedTracks: builder.query<ITopListenedTracks, { 
            token: string, 
            // requestType: PROFILE_TOP_REQUEST, 
            timeRange: TIME_RANGE
        }>({
            query: (args) => {
                const { token, timeRange } = args;
                return ({
                    url: `top/tracks`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                    params: {
                        limit: 20,
                        time_range: `${timeRange}`
                    }
                });
            },
        }),
        getRecentlyPlayingTracks: builder.query<any, { token: string }>({
            query: (args) => {
                const { token } = args;
                return ({
                    url: 'player/recently-played',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Authorization': `Bearer ${token}`
                    },
                    params: {
                        limit: 30,
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
