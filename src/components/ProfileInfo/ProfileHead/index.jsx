import React from 'react'
import './profileHead.css'

export const ProfileHead = (props) => {
    const fullname = props.user.firstName + ' ' + props.user.lastName
    // const avatar = props.user.avatar ? props.user.avatar : ''
    return (
        <div className="info-wrapper">
            <div className="avatar-box">
                <img className="avatar-photo" src={props.user.avatar} />
            </div>
            <div className="profile-info">
                <h1 className="profile-name">{fullname}</h1>
                <div className="profile-status caption">{props.user.status}</div>
                <div className="profile-city caption">{props.user.city}</div>
            </div>
        </div>
    )
}