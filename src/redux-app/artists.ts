import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArtist, IArtistsApi, ISingleArtistApi, ITopTracksApi, RootType } from ".";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArtistFeaturesApi, IRelatedArtistsApi, ITopAlbumsApi } from "./types";
import { LOCALSTORAGE_KEYS } from "components/constants";

const initialState = {
    artists: [] as IArtist[],
    currentArtistId: '',
    topTrackIds: ''
}

export const ARTISTS_API_REDUCER_KEY = 'artistsApi';

export const artistsApi = createApi({
    reducerPath: ARTISTS_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.spotify.com/v1/`,
        method: 'GET',
        prepareHeaders: (headers) => {
            const accessToken = localStorage.getItem(LOCALSTORAGE_KEYS.token);
            if (accessToken) {
                headers.set('Authorization', `Bearer ${accessToken}`)
                headers.set('Content-Type', 'application/x-www-form-urlencoded')
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        getArtists: builder.query<IArtistsApi, { value: string }>({
            query: (args) => {
                const { value } = args;
                return ({
                    url: 'search',
                    params: { q: value, type: 'artist', limit: 5 },
                });
            },
        }),
        getSingleArtist: builder.query<ISingleArtistApi, { artistId: string }>({
            query: (args) => {
                const { artistId } = args;
                return ({
                    url: `artists/${artistId}`,
                });
            },
        }),
        getArtistAlbums: builder.query<ITopAlbumsApi, { artistId: string }>({
            query: (args) => {
                const { artistId } = args;
                return ({
                    url: `artists/${artistId}/albums`,
                });
            },
        }),
        getArtistTopTracks: builder.query<ITopTracksApi, { artistId: string }>({
            query: (args) => {
                const { artistId } = args;
                return ({
                    url: `artists/${artistId}/top-tracks?country=US`,
                });
            },
        }),
        getRelatedArtists: builder.query<IRelatedArtistsApi, { artistId: string }>({
            query: (args) => {
                const { artistId } = args;
                return ({
                    url: `artists/${artistId}/related-artists`,
                });
            },
        }),
        getAudioFeatures: builder.query<IArtistFeaturesApi, { artistIds: string }>({
            query: (args) => {
                const { artistIds } = args;
                return ({
                    url: `audio-features`,
                    params: {
                        ids: artistIds
                    },
                    // transformResponse: (returnValue: IArtistFeaturesApi) => {
                    //     // `meta` here contains our added `requestId` & `timestamp`, as well as
                    //     // `request` & `response` from fetchBaseQuery's meta object.
                    //     // These properties can be used to transform the response as desired.

                    //     // return returnValue.audioFeatures.reduce((acc, el) => {
                    //     // }, {} as IArtistFeaturesApi['audioFeatures'][number])
                    //   },
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
