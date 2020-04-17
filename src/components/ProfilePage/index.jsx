import React from "react"

import { connect } from "react-redux"
import { ProfilePosts } from "../Posts"
import { ProfileInfo } from '../ProfileInfo/index'


export const ProfilePageView = (props) => {
    return(
        <div>
            <ProfileInfo user={props.user} />
            <ProfilePosts />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.users.user,
    }
}

export const ProfilePage = connect(mapStateToProps ,null)(ProfilePageView) 


