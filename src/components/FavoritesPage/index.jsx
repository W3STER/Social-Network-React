import React from 'react'
import { connect } from 'react-redux'
import { NewsItemFavorites } from '../NewsPage/NewsItem'

const FavoritesPageView = props => {
    console.log(props.news)
    if(!props.news.length){
        return (
            <div>
                <h2 className="second-title">No favorites</h2>
            </div>
        )
    }
    return (
        <div>
            <h2 className="second-title">{props.news.length} items</h2>
            {props.news.map(item => (
                <NewsItemFavorites news={item} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        news: state.news.favorites
    }
}

export const FavoritesPage = connect(mapStateToProps, null)(FavoritesPageView)

