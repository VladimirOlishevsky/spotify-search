import { getStyles } from './styles';

export const SearchBar = () => {

    const classes = getStyles()
    return (
        <div className={classes.root}>
            <form className={classes.form} role="search">
                <label className={classes.label} htmlFor="search">Search for stuff</label>
                <input
                    className={classes.input}
                    id="search"
                    type="search"
                    placeholder="Search..."
                    // autoFocus
                    // required
                    autoComplete="off" />
                <button className={classes.button} type="submit">Go</button>
            </form>
        </div>
    );
}