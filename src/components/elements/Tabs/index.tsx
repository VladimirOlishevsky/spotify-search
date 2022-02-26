import clsx from "clsx";
import { getStyles } from "./styles";

interface ITabs<T> {
    values: T[]
    active: T,
    setActive: React.Dispatch<React.SetStateAction<T>>,
    externalActiveStyles?: string,
    externalTabStyles?: string
}

export const Tabs = <T,>({
    values,
    active,
    setActive,
    externalActiveStyles,
    externalTabStyles
}: ITabs<T>) => {
    const classes = getStyles()

    return (
        <ul className={classes.root}>
            {values.map((el, index) => (
                <li
                    key={index}
                    className={clsx( 
                        classes.tab,
                        externalTabStyles,
                        el === active && externalActiveStyles
                    )}
                    onClick={() => setActive(el)}>
                    {el}
                </li>
            ))}
        </ul>
    )
}