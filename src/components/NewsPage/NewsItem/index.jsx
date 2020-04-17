import React, { useState } from 'react'
import './newsItem.css'
import { connect } from 'react-redux'
import { shareNews, deleteFavorites } from '../../../redux/actions'
import { DeleteButton } from '../../DeleteButton'

export const NewsItemView = props => {
    const addFavorites = () => {
        const newsPost = props.news
        props.shareNews(newsPost)
    }
    const deleteFavoritesItem = () => {
        const id = props.news.publishedAt
        props.deleteFavorites(id)
    }

    return (
        <div className="news-item-wrapper">
            <div className="caption source-name">{props.news.source.name}</div>
            <div className="img-box">
                <img className="news-img" src={props.news.urlToImage} />
            </div>
            {/* <div className="caption news-date">{props.news.publishedAt}</div> */}
            <h3 className="third-title"><a className="link" href={props.news.url}>{props.news.title}</a></h3>
            <div className="subtitle">{props.news.description}</div>


            <div className="btn-panel">
                {props.shareNews &&
                    <div className="btn-box">
                        <button
                            className="share-btn"
                            onClick={addFavorites}
                        />
                    </div>
                }
                {props.deleteFavorites && 
                    <DeleteButton onClick={deleteFavoritesItem}/>
                }
            </div>

        </div>
    )
}

const mapDispatchToProps = {
    shareNews
}

const favoriteDispatchToProps = {
    deleteFavorites
}

export const NewsItem = connect(null, mapDispatchToProps)(NewsItemView)
export const NewsItemFavorites = connect(null, favoriteDispatchToProps)(NewsItemView)