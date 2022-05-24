import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const newsApiHeaders = {
    // 'X-BingApis-SDK': 'true',
    // 'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    // 'X-RapidAPI-Key': 'df0958e18fmsh51ce637f2fd91e2p13bf6cjsn8fa27cacacd7'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: newsApiHeaders })


export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})


export const { useGetNewsQuery } = newsApi