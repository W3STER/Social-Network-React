import React from 'react'
import './button.css'

const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary"
}

const sizes = {
    medium: "size-medium"
}

const colors = {
    primary: "color-primary"
}

export const Button = props => {
    const {
        style,
        size,
        color
    } = props

    const disabled = props.disabled
    const isDisabled = disabled ? "_disabled" : ""
    return (
        <div className="btn-wrapper btn-post">
            <button 
                className={`btn ${styles[style]} ${sizes[size]} ${colors[color]} ${isDisabled}`}
                onClick={props.onClick}
            >{props.label}</button>
        </div>
    )
}