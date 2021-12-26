import { useEffect, useState } from "react"

export const useDebounce = (value: string, interval: number) => {
    const [item, setItem] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => setItem(item), interval);
        return () => clearTimeout(timeout)
    }, [item, interval])

    return item
}