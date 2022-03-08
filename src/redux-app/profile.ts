import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCALSTORAGE_KEYS } from "components/constants";
import { TIME_RANGE } from "./constants";
import { RootType } from "./store";
import { IFollowedArtists, IProfile, IRecentlyPlayed, ITopListenedTracks } from "./types";

const initialState = {
    profile: [],
}

export const PROFILE_API_REDUCER_KEY = 'profileApi';


export const profileApi = createApi({
    reducerPath: PROFILE_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.spotify.com/v1/me`,
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem(LOCALSTORAGE_KEYS.token);
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`)
                headers.set( 'Content-Type', 'application/json; charset=utf-8')
            }
            return headers
        },
    }),

    endpoints: (builder) => ({
        getProfile: builder.query<IProfile, void>({
            query: () => {
                return ({
                    url: '',
                    method: 'GET',
                });
            },
        }),
        getProfileFollowedArtists: builder.query<IFollowedArtists, { 
            timeRange: TIME_RANGE
        }>({
            query: (args) => {
                const { timeRange } = args;
                return ({
                    url: `top/artists`,
                    method: 'GET',
                    params: {
                        limit: 20,
                        time_range: `${timeRange}`
                    }
                });
            },
        }),
        getProfileListenedTracks: builder.query<ITopListenedTracks, { 
            timeRange: TIME_RANGE
        }>({
            query: (args) => {
                const { timeRange } = args;
                return ({
                    url: `top/tracks`,
                    method: 'GET',
                    params: {
                        limit: 20,
                        time_range: `${timeRange}`
                    }
                });
            },
        }),
        getRecentlyPlayingTracks: builder.query<IRecentlyPlayed, void>({
            query: () => {
                return ({
                    url: 'player/recently-played',
                    method: 'GET',
                    params: {
                        limit: 20,
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
