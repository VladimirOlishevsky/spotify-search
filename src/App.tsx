import './App.css';
import { SearchBar } from './components';
import {
  appSelector,
  decrement,
  increment,
  useAppDispatch,
  useAppSelector
} from './redux';

export const App = () => {

  const dispatch = useAppDispatch();
  const { value } = useAppSelector(appSelector);
  console.log('value', value)

  // const getToken = async () => {

  //   const result = await fetch('https://accounts.spotify.com/api/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //       'Authorization': 'Basic ' + btoa('515ff8815b3a47b3b2133151fe0caa5c' + ':' + '1a4a8bbec52c4c9c90e75f733034705c')
  //     },
  //     body: 'grant_type=client_credentials'
  //   });

  //   const data = await result.json();
  //   console.log('1111', data)
  //   return data.access_token;
  // }

  // console.log(getToken())
  // console.log('here')

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <button onClick={() => dispatch(increment())}>
          +
        </button>
        {value}
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
      </header>
    </div>
  );
}