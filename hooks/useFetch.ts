import { useState, useEffect } from "react"
import axios from "axios"

// const useFetch = (url: string) => {
function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<{ message: string } | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(
            () =>
                axios
                    .get(url)
                    .then((res) => setData(res.data))
                    .catch((err) => setError(err))
                    .finally(() => setLoading(false)),
            2000
        )
    }, [])

    return { data, error, loading }
}

export { useFetch }
