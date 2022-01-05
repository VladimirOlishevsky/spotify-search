import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArtist, IArtistsApi, RootType } from ".";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
    artists: [] as IArtist[],
    currentArtistId: ''
}

export const ARTISTS_API_REDUCER_KEY = 'artistsApi';
export const SINGLE_API_REDUCER_KEY = 'singleArtistsApi';
export const API_PARTNER_SPOTIFY_REDUCER_KEY = 'apiPartnerSpotify';

export const artistsApi = createApi({
    reducerPath: ARTISTS_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.spotify.com/v1/`,
    }),
    endpoints: (builder) => ({
        getArtists: builder.query<any, { token: string, value: string }>({
            query: (args) => {
                const { token, value } = args;
                return ({
                    url: 'search',
                    params: { q: value, type: 'artist', limit: 5 },
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${token}`
                    },
                });
            },
        }),
        getSingleArtist: builder.query<any, { token: string, artistId: string }>({
            query: (args) => {
                const { token, artistId } = args;
                return ({
                    url: `artists/${artistId}`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${token}`
                    },
                });
            },
        }),
        getArtistAlbums: builder.query<any, { token: string, artistId: string }>({
            query: (args) => {
                const { token, artistId } = args;
                return ({
                    url: `artists/${artistId}/albums`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${token}`
                    },
                });
            },
        }),
        getArtistTopTracks: builder.query<any, { token: string, artistId: string }>({
            query: (args) => {
                const { token, artistId } = args;
                return ({
                    url: `artists/${artistId}/top-tracks?country=US`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${token}`
                    },
                });
            },
        }),
        getRelatedArtists: builder.query<any, { token: string, artistId: string }>({
            query: (args) => {
                const { token, artistId } = args;
                return ({
                    url: `artists/${artistId}/related-artists`,
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
            state.artists = action.payload.artists.items;
        },
        getSingleArtist(state, action: PayloadAction<string>) {
            console.log(' action.payload',  action.payload)
            state.currentArtistId = action.payload;
        },
    },
});

export const { getArtists, getSingleArtist } = artistsSlice.actions;
export const artistsSelector = (state: RootType) => state.artists;
export const atristsReducer = artistsSlice.reducer;
