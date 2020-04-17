import React, { useMemo } from 'react'

import { connect } from 'react-redux'
import { PostsView } from '../../Posts'
import { ProfileInfo } from '../../ProfileInfo'

const UserProfileView = (props) => {
    const userId = props.match.params.id
    const user = useMemo(() => {
        return props.users.find(item => item.id === userId)
    }, [userId, props.users])

    console.log(props)

    return (
        <div>
            <ProfileInfo user={user} />
            <PostsView posts={user.posts} userId={userId} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
    }
}

export const UserProfilePage = connect(mapStateToProps, null)(UserProfileView)
