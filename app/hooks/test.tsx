import { useEffect, useState } from "react";

const useFetch =(url: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try{
                const data = await fetch(url);
                const result = await data.json();
                setData(result);
            }
            catch(error){
                console.error(error)
            }
            finally{
                setLoading(false);
            }
        }
        fetchData()
    }, [url])

    return {data, loading};
}

export default useFetch;