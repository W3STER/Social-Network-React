import React from 'react'
import './loading.css'

export const Loading = props => {
    return (
        <div className="loading-wrapper">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}