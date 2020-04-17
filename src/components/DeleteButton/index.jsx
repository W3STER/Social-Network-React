import React from "react"
import './deleteButton.css'

export const DeleteButton = props => {
    return (
        <button 
            className="delete-btn" 
            onClick={props.onClick}
        />
    )
}