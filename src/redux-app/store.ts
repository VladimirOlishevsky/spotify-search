import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'; 
import authReducer, { authApi } from './auth';
import { artistsApi, atristsReducer } from './artists';
import { profileReducer, profileApi } from './profile'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        artists: atristsReducer,
        profile: profileReducer,
        [authApi.reducerPath]: authApi.reducer,
        [artistsApi.reducerPath]: artistsApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer
    }
})

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector