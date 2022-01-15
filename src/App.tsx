import { Search, Artist } from 'components/blocks';
import { getStyles } from 'styles';


export const App = () => {
  const classes = getStyles();
  return (
    <div className={classes.root}>
      <Search />
      <Artist />
    </div>
  );
}