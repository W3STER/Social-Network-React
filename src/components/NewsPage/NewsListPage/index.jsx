import React, { useState, useEffect } from 'react'
import { NewsItem } from '../NewsItem/index';
import { Loading } from '../../Loading';

export const NewsListPage = props => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [errMessage, setErrMessage] = useState()
    useEffect(() => {
        let url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=3488976bae5d4fb39b0faffb1094c0c5';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data.status === 'error'){
                    setErrMessage(data.message)
                    setLoading(false)
                }else{
                    setNews(data.articles)
                    setLoading(false)
                }
                
            })
    }, [])
    return (
        <div>
            <h2 className="title-page">News</h2>
            <p>{errMessage}</p>
            {loading ?
                <Loading />
                :
                news.map(item => (
                    <NewsItem news={item} />
                )) 
            }
        </div>
    )
}