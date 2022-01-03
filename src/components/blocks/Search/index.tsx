import { SearchBar } from 'components';
import { useEffect } from 'react';
import { useAppDispatch } from 'redux-app';
import { getStyles } from './styles';

import { authApi, updateAccessToken } from 'redux-app/auth';


export const Search = () => {
    const classes = getStyles();

    const dispatch = useAppDispatch(); // delete
    // const { value } = useAppSelector(appSelector); // delete
    const accessTokenQueryResult = authApi.endpoints.getAccessToken.useQuery('');

    const { data } = accessTokenQueryResult;
    const accessToken = data?.access_token;

    useEffect(() => {
        if (!accessToken) return;
        dispatch(updateAccessToken(accessToken));
    }, [dispatch, accessToken]);

    return (
        <div className={classes.root}>
            <SearchBar />
        </div>
    );
}