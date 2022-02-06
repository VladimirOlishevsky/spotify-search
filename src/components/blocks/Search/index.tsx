import { SearchBar } from 'components';
import { getStyles } from './styles';


export const Search = () => {

    window.history.pushState({}, '', '/');
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
