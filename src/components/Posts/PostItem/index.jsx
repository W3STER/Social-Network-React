import React from 'react'
import './postItem.css'
import { connect } from 'react-redux'
import { DeleteButton } from '../../DeleteButton'
import { deletePost, deletePostUser } from '../../../redux/actions'

const PostItemView = props => {
    const handleDeletePost = () => {
        if(props.userId){
            props.deletePostUser(props.userId, props.post.id)
        }
        props.deletePost(props.post.id)
    }
    
    const fullname = props.user.firstName + " " + props.user.lastName
    return (
        <div className="post-item" id={props.post.id} >
            <div className="post-user">
                <div className="post-avatar_box">
                    <img className="post-avatar_photo" src={props.user.avatar} />
                </div>
                <div className="post-user_info">
                    <div className="post-username">{fullname}</div>
                    <div className="post-date">{props.post.date}</div>
                </div>
                <DeleteButton onClick={handleDeletePost} />
            </div>
            <div className="post-text">{props.post.post}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.users.user
    }
}

const mapDispathToProps = {
    deletePost,
    deletePostUser
}

export const PostItem = connect(mapStateToProps, mapDispathToProps)(PostItemView)