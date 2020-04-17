import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './asideNav.css'

export const AsideNav = withRouter(props => {
    return (
        <div className="aside-nav">
            <ul className="aside-nav _wrapper">
                <li className="nav-link_box"><Link to="/" className="link nav-link _profile">Profile</Link></li>
                <li className="nav-link_box"><Link to="/friends" className="link nav-link _friends">Friends</Link></li>
                <li className="nav-link_box"><Link to="/news" className="link nav-link _news">News</Link></li>
                <li className="nav-link_box"><Link to="/media" className="link nav-link _media">Media</Link></li>
                <li className="nav-link_box"><Link to="/favorites" className="link nav-link _favorites">Favorites</Link></li>
                <li className="nav-link_box _edit"><Link to="/edit" className="link nav-link _edit">Edit</Link></li>
            </ul>
        </div>
    )
})