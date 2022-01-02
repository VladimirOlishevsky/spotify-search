import { useEffect, useState } from "react"

export const useDebounce = (value: string, interval: number) => {
    const [item, setItem] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setItem(value), interval);
        return () => clearTimeout(timeout)
    }, [value, interval])

    return item
}