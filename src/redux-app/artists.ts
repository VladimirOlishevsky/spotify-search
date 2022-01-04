import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArtist, IArtistsApi, RootType } from ".";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
    artists: [] as IArtist[]
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
                    // params: { q: value, type: 'artist', limit: 5 },
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
export const apiPartnerSpotify = createApi({
    reducerPath: API_PARTNER_SPOTIFY_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api-partner.spotify.com/pathfinder/v1/`,
    }),
    endpoints: (builder) => ({
        getArtistsLalala: builder.query<any, { artistId: string }>({
            query: (args) => {
                const { artistId } = args;
                return ({
                    url: 'query',
                    params: { 
                        operationName: 'queryArtistOverview', 
                        variables: JSON.stringify({"uri":`spotify:artist:${artistId}`}), 
                        extensions: JSON.stringify({"persistedQuery":{"version":1,"sha256Hash":"c54d1f5a13f7780be8ad8df47e076f811abea3c682c57221cd04d1bc59a65e07"}}) 
                    },
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': `Bearer BQBd-QxgOgef_ON-pgZMz3L0wezwoAgPUK_RIDq0S47_GQ-qHPJ0cr9MygD6Kpf5Q6a48OVmmx0jVUeDBv5q1HC6KtXLAvwIxbN8jURYF8ZuZ5yvpo756XYgtGoM8pDYgr0ISa-FkQMvv-GhVD_kGBhJJs8C79IUH1nyopfgtkDlMefYxw0R7rCCQAbfnAE9GO0cEOT4TKyPCBFnyPGXDJkpKKPQUwCxv4vXJFpNHcdj3tOVtQG8BQIZCSbtJLB7tg6k88l52TlDARzKcbwQflKzLrAUJ9CgL0drqISgjzX0MrbX010lt1a6chkZ2SK-`
                    },
                });
            },
        }),
    }),
});

// export const singleArtistApi = createApi({
//     reducerPath: SINGLE_API_REDUCER_KEY,
//     baseQuery: fetchBaseQuery({
//         baseUrl: `https://api.spotify.com/v1/search`,
//     }),
//     endpoints: (builder) => ({
//         getArtists: builder.query<any, { token: string, value: string }>({
//             query: (args) => {
//                 const { token, value } = args; 
//                 return ({
//                     url: ``,
//                     params: { q: value, type: 'artist', limit: 5 },
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                         'Authorization': `Bearer ${token}`
//                     },
//                 });
//             },
//         }),
//     }),
// });


export const artistsSlice = createSlice({
    name: 'artistsSlice',
    initialState,
    reducers: {
        getArtists(state, action: PayloadAction<IArtistsApi>) {
            state.artists = action.payload.artists.items;
        },
    },
});

export const { getArtists } = artistsSlice.actions;
export const artistsSelector = (state: RootType) => state.artists;
export const atristsReducer = artistsSlice.reducer;
