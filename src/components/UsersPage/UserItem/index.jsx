import React from 'react'
import { Link } from "react-router-dom"
import './UserItem.css'

export const UserItem = (props) => {
    let name = `${props.user.firstName} ${props.user.lastName}`
    return(
        <div className="user-item">
            <img className="user-avatar" src={props.user.avatar} />
            <div className="user-info">
                <Link to={`/friends/${props.user.id}`} className="link"><div className="user-name">{name}</div></Link>
                <div className="user-company caption">{props.user.company}</div>
                <div className="user-city caption">{props.user.city}</div>
            </div>
        </div>
    )
}