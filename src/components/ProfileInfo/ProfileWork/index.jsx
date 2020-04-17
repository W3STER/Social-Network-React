import React from 'react'
import './profileWork.css'

export const ProfileWork = props => {
    return (
        <section className="section-wrapper">
            <div className="description-wrapper">
                <div className="caption description">Company</div>
                <div className="company-name caption">{props.user.company}</div>
            </div>
            <div className="description-wrapper">
                <div className="caption description">Position</div>
                <div className="user-position caption">{props.user.position}</div>
            </div>
        </section>
    )
}