import { SearchBar } from 'components';
import { ToggleTheme } from 'components/elements/ToggleTheme';
import { useEffect } from 'react';
import { authApi, updateAccessToken, useAppDispatch } from 'redux-app';
import { getStyles } from './styles';


export const Search = () => {

    // временное решение 

    // const dispatch = useAppDispatch(); // delete
    // const accessTokenQueryResult = authApi.endpoints.getAccessToken.useQuery('');

    // const { data } = accessTokenQueryResult;
    // const accessToken = data?.access_token;

    // useEffect(() => {
    //     if (!accessToken) return;
    //     dispatch(updateAccessToken(accessToken));
    // }, [dispatch, accessToken]);
    
    // // временное решение
    
    // window.history.pushState({}, '', '/');
    const classes = getStyles();

    return (
        <div className={classes.root}>
            <SearchBar />
        </div>
    );
}

// const dispatch = useAppDispatch(); // delete
// const accessTokenQueryResult = authApi.endpoints.getAccessToken.useQuery('');
// const { data } = accessTokenQueryResult;
// const accessToken = data?.access_token;
