import clsx from "clsx";
import { useState } from "react"
import { getStyles } from "./styles";

export const Tabs = () => {
    const classes = getStyles()

    const tabsConfig = ['search', 'personal'];
    const [active, setActive] = useState(tabsConfig[0])

    return (
        <ul className={classes.root}>
            {tabsConfig.map(el => (
                <li
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