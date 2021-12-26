import { useEffect, useState } from 'react';
import { appSelector, useAppDispatch, useAppSelector } from 'redux-app';
import { authSelector } from 'redux-app/auth';
import { useDebounce } from 'utils';
import { getStyles } from './styles';

export const SearchBar = () => {
    const classes = getStyles();

    const dispatch = useAppDispatch();
    // const { authToken } = useAppSelector(authSelector);
    // console.log('authTokenauthTokenauthTokenauthTokenauthToken', authToken)

    const [searchState, setSearchState] = useState('');
    const intermediateValue = useDebounce(searchState, 500);



    console.log('searchState', searchState)

    // useEffect(() => {
    //     if(intermediateValue) {
            
    //     }
    //     // effect
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [dispatch, intermediateValue])

    return (
        <div>
            <form className={classes.form} role="search">
                <label className={classes.label} htmlFor="search">Search for stuff</label>
                <input
                    onChange={(e) => setSearchState(e.currentTarget.value)}
                    className={classes.input}
                    id="search"
                    type="search"
                    placeholder="Search..."
                    autoComplete="off" />
                <button className={classes.button} type="submit">Go</button>
            </form>
        </div>
    );
}