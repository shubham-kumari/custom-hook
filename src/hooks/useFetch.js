import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue){
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetcheddata] = useState(initialValue);
    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const data = await fetchFn();
            setFetcheddata(data);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data.' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

    return {
        isFetching,
        error,
        fetchedData,
        setFetcheddata
    }
}