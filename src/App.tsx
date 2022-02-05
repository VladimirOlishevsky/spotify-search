import { Search, Artist, Login } from 'components/blocks';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { getStyles } from 'styles';


export const App = () => {
  const classes = getStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route path="/about" element={
            <div className={classes.root}>
              <Search />
              <Artist />
            </div>
          } />
          <Route path="/" element={
            <Login />
          }
          />
        </Routes>
      </Router>
    </div>
  );
}