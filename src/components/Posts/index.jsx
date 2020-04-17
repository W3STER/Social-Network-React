import React from 'react'
import { PostForm } from './PostForm'
import { connect } from 'react-redux'
import { PostItem } from './PostItem'

export const PostsView = props => {
    if(!props.posts.length){
        return (
            <div className="posts-wrapper">
                <PostForm userId={props.userId}/>
                <h2>0 posts</h2>
            </div>
        )
    }
    return (
        <div className="posts-wrapper">
            <PostForm  userId={props.userId} />
            <h2 className="second-title">{props.posts.length} posts</h2>
            {props.posts.map(item => {
                return <PostItem post={item} userId={props.userId} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export const ProfilePosts = connect(mapStateToProps, null)(PostsView)