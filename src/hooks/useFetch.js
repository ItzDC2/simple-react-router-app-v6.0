import { useState, useCallback, useEffect } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(url);

            if(!res.ok)
                throw new Error("Error fetching data");
            
            const data = await res.json();
            setData(data);

        } catch (err) {
            setError(err.message);
            setData([]);

        } finally {
            setLoading(false);
        }
    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return { data, loading, error }
}