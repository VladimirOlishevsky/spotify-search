import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'; 
import appReducer from './app';
import authReducer, { authApi } from './auth';
import { artistsApi, atristsReducer } from './artists'


export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        artists: atristsReducer,
        [authApi.reducerPath]: authApi.reducer,
        [artistsApi.reducerPath]: artistsApi.reducer,
    }
})

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector