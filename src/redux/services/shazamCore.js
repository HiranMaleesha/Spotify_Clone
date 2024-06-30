import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core7.p.rapidapi.com',
        prepareHeaders:(headers)=> {
            headers.set('x-rapidapi-key', 'f7ff07744bmshc26177c07dab873p15e18bjsn45a66241f0e9');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopChart : builder.query({ query:() => '/charts/get-top-songs-in-world?limit=50'}),
    }),
});

export const{
    useGetTopChartQuery,
    } = shazamCoreApi;

export default shazamCoreApi;
