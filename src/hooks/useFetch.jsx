import { useState, useEffect } from 'react';

export default function useFetch(url, options) {
    const [loading, setLoading] = useState(true);
    const [results, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
    }, [options, url]); // cuando se actualize uno de los dos se actualizara todo el useEffect

    return { loading, results, error };
}