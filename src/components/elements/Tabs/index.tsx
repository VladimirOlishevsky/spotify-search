import clsx from "clsx";
import { TABS_CONFIG } from "components/constants";
import { getStyles } from "./styles";

interface ITabs {
    active: string,
    setActive: React.Dispatch<React.SetStateAction<TABS_CONFIG>>,
}

export const Tabs = ({
    active,
    setActive,
}: ITabs) => {
    const classes = getStyles()

    return (
        <ul className={classes.root}>
            {Object.values(TABS_CONFIG).map(el => (
                <li
                    key={el}
                    className={clsx(
                        classes.tab,
                        el === active ? classes.active : undefined
                    )}
                    onClick={() => setActive(el)}>
                    {el}
                </li>
            ))}
        </ul>
    )
}