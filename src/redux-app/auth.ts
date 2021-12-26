import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootType } from ".";

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IInitialState {
    authToken: string
}

const initialState: IInitialState = {
    authToken: '',
}

export const AUTH_API_REDUCER_KEY = 'authApi';

export const authApi = createApi({
    reducerPath: AUTH_API_REDUCER_KEY,
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://accounts.spotify.com/api/token',
    }),
    endpoints: (builder) => ({
        getAccessToken: builder.query({
            query: () => {
                return ({
                    url: '',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization': 'Basic '
                            + btoa('515ff8815b3a47b3b2133151fe0caa5c'
                                + ':'
                                + '1a4a8bbec52c4c9c90e75f733034705c')
                    },
                    body: 'grant_type=client_credentials'
                });
            },
        }),
    }),
});



export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        updateAccessToken(state, action: PayloadAction<string>) {
            console.log('action', action)
            state.authToken = action.payload;
        },
    },
});

export const { updateAccessToken } = authSlice.actions;
export const authSelector = (state: RootType) => state.auth;
export default authSlice.reducer;
