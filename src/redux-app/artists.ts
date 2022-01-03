import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArtist, IArtistsApi, RootType } from ".";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
    artists: [] as IArtist[]
}

export const ARTISTS_API_REDUCER_KEY = 'artistsApi';

export const artistsApi = createApi({
    reducerPath: ARTISTS_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.spotify.com/v1/search`,
    }),
    endpoints: (builder) => ({
        getArtists: builder.query<any, { token: string, value: string }>({
            query: (args) => {
                const { token, value } = args; 
                return ({
                    url: ``,
                    params: { q: value, type: 'artist', limit: 5 },
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${token}`
                    },
                });
            },
        }),
    }),
});



export const artistsSlice = createSlice({
    name: 'artistsSlice',
    initialState,
    reducers: {
        getArtists(state, action: PayloadAction<IArtistsApi>) {
            console.log('111111', action)
            state.artists = action.payload.artists.items;
        },
    },
});

export const { getArtists } = artistsSlice.actions;
export const artistsSelector = (state: RootType) => state.artists;
export const atristsReducer = artistsSlice.reducer;
