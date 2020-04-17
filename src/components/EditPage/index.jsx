import React from 'react'
import { connect } from 'react-redux'
import { EditForm } from './EditForm'

const EditPageView = props => {
    return (
        <div>
            <h2 className="title-page">Edit Page</h2>
            <EditForm user={props.user} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.users.user
    }
}

export const EditPage = connect(mapStateToProps, null)(EditPageView)