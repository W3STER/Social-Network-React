import React from 'react'
import './playerItem.css'

export const PlayerItem = props => {
    const play = event => {
        props.getTrack(event.target.id)
    }
    const pause = () => {
        props.pauseTrack()
    }
    return (
        <div className="player-wrapper">
            <div className="player-description">{props.audio.name}</div>
            <div className="player-panel">
                <button id={props.audio.name} onClick={play} className="play-btn" />
                <button id={props.audio.name} onClick={pause} className="pause-btn" />
            </div>
        </div>
    )
}