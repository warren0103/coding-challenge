import { useEffect, useState } from "react";
import axios from "axios";

export function useGetMovies (url) {
    const initial_state = { 
        loading : true,
        movies : null,
        error : null
    }
    const [data, setData] = useState(initial_state);

    useEffect(()=> {
        const source = axios.CancelToken.source();

        async function loadData(url) {
            try {
                const config = { cancelToken : source.token };
                let res = await axios.get(url, config);
                setData({loading : false, error : null, movies : res.data.results});
            } catch (e) {
                if(axios.isCancel(e)) {
                    console.log('THE REQUEST CANCELED, DUE TO THE COMPONENT BEING UNMOUNTED');
                } else {
                    setData({loading : false, error : e.message, movies : null})
                }
            }
        }
        loadData(url);
        return ()=> {
            // CANCEL THE AXIOS REQUEST WHEN THE COMPONENT UMOUNTS;
            source.cancel();
        }
    }, [])
    return data;
}

