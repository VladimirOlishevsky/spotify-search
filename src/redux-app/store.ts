import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'; 
import { artistsApi, atristsReducer } from './artists';
import { profileReducer, profileApi } from './profile'


export const store = configureStore({
    reducer: {
        artists: atristsReducer,
        profile: profileReducer,
        [artistsApi.reducerPath]: artistsApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer
    },
    
})

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector