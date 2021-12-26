import './App.css';
import { SearchBar } from './components';
import {
  appSelector,
  decrement,
  increment,
  useAppDispatch,
  useAppSelector,
} from './redux-app';
import { useEffect } from 'react';
import { authApi, updateAccessToken } from './redux-app/auth';

export const App = () => {

  const dispatch = useAppDispatch(); // delete
  const { value } = useAppSelector(appSelector); // delete
  const accessTokenQueryResult = authApi.endpoints.getAccessToken.useQuery('');

  const { data } = accessTokenQueryResult;
  const accessToken = data?.access_token;

  useEffect(() => {
    if (!accessToken) return;
    dispatch(updateAccessToken(accessToken));
  }, [dispatch, accessToken]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        {/* <button onClick={() => dispatch(increment())}>
          +
        </button>
        {value}
        <button onClick={() => dispatch(decrement())}>
          -
        </button> */}
      </header>
    </div>
  );
}