import React, { useState } from 'react'
import { PostTextField } from '../../TextField/Index'
import { Button } from '../../Button'
import { connect } from 'react-redux'
import { addPost, addPostUser } from '../../../redux/actions'
import { withForm } from '../../FormValidation/withForm'
import { validation } from '../../FormValidation/withForm'
import './postForm.css'


function getDate() {
    const date = new Date().toLocaleDateString('en', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
        
    })
    console.log(date)
    return date
}

const PostFormView = (props) => {
    const addNewPost = (event) => {
        event.preventDefault()

        if (!props.disabled) {
            const newPost = {
                id: Math.round(Math.random() * 9999),
                date: getDate(),
                post: props.values.post
            }
            if(props.userId){
                props.addPostUser(newPost, props.userId)

            }else{
                props.addPost(newPost)
            }
            props.setFieldValue('post', '')
            props.setFieldDirty('')
        }
    }

    return (
        <form className="post-form" onSubmit={addNewPost}>
            <PostTextField
                className="post-field"
                {...props}
                value={props.values.post}
                type='text'
                name='post'
                placeholder='Write a new post'
            />
            <Button
                disabled={props.disabled}
                label='Add post'
                style="primary"
                size="medium"
                color="primary"
            />
        </form>
    )
}

const mapDispatchToProps = {
    addPost,
    addPostUser,
}

const withDispatch = connect(null, mapDispatchToProps)(PostFormView)
export const PostForm = withForm(validation)(withDispatch)
