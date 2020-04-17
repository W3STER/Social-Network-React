import React from 'react'
import { ProfileHead } from './ProfileHead'
import { ProfileWork } from './ProfileWork'

export const ProfileInfo = props => {
    return (
        <div>
            <ProfileHead user={props.user} />
            <p className="subtitle">General information</p>
            <ProfileWork user={ props.user } />
        </div>
    )
}