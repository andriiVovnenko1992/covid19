import { FETCH_STATISTICS } from './../constants';

export const fetchData = async ( url,  query) => {
    if(query) {
        url = url + `?country=${query}`;
    }
    const res = await fetch(url, {
        mode: "cors",
        headers: {
            'Access-Control-Allow-Origin': 'origin',
        },
    });
    if(res.status !== 200) {
        console.log(res.status);
    };
    const data = await res.json();
    console.log(data);
    return data;
};
export const fetchAllStatistics = async () => fetch(FETCH_STATISTICS).then(res => res.json());
export const fetchOneCountry = async (country) => fetch(`${FETCH_STATISTICS}?country=${country}`).then(res => res.json());
