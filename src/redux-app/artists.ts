import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArtist, IArtistsApi, ISingleArtistApi, ITopTracksApi, RootType } from ".";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArtistFeaturesApi, IRelatedArtistsApi, ITopAlbumsApi } from "./types";

const initialState = {
    artists: [] as IArtist[],
    currentArtistId: '',
    topTrackIds: ''
}

export const ARTISTS_API_REDUCER_KEY = 'artistsApi';
export const ARTISTS_REATURES_API_REDUCER_KEY = 'artistsFeaturesApi';
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
        getSingleArtist: builder.query<ISingleArtistApi, { token: string, artistId: string }>({
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
        getArtistAlbums: builder.query<ITopAlbumsApi, { token: string, artistId: string }>({
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
        getArtistTopTracks: builder.query<ITopTracksApi, { token: string, artistId: string }>({
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
        getRelatedArtists: builder.query<IRelatedArtistsApi, { token: string, artistId: string }>({
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
        getAudioFeatures: builder.query<IArtistFeaturesApi, { token: string, artistIds: string }>({
            query: (args) => {
                const { token, artistIds } = args;
                return ({
                    url: `audio-features`,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer ${token}`
                    },
                    params: {
                        ids: artistIds
                    },
                    transformResponse: (returnValue: IArtistFeaturesApi) => {
                        // `meta` here contains our added `requestId` & `timestamp`, as well as
                        // `request` & `response` from fetchBaseQuery's meta object.
                        // These properties can be used to transform the response as desired.

                        // return returnValue.audioFeatures.reduce((acc, el) => {
                        // }, {} as IArtistFeaturesApi['audioFeatures'][number])
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
            state.currentArtistId = action.payload;
        },
        setTrackIds(state, action: PayloadAction<string>) {
            state.topTrackIds = action.payload
        },
        clearArtistsList(state) {
            state.artists = []
        }
    },
});

export const { getArtists, getSingleArtist, clearArtistsList, setTrackIds } = artistsSlice.actions;
export const artistsSelector = (state: RootType) => state.artists;
export const atristsReducer = artistsSlice.reducer;
