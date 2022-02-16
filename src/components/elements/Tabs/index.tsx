import clsx from "clsx";
import { getStyles } from "./styles";

interface ITabs<T> {
    values: T[]
    active: T,
    setActive: React.Dispatch<React.SetStateAction<T>>,
    externalClasses?: string,
}

export const Tabs = <T,>({
    values,
    active,
    setActive,
    externalClasses
}: ITabs<T>) => {
    const classes = getStyles()

    return (
        <ul className={classes.root}>
            {values.map((el, index) => (
                <li
                    key={index}
                    className={clsx(
                        classes.tab,
                        el === active && externalClasses
                    )}
                    onClick={() => setActive(el)}>
                    {el}
                </li>
            ))}
        </ul>
    )
}