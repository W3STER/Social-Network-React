import React, { useState, useEffect } from 'react'
import './mediaPage.css'
import { PlayerItem } from './PlayerItem'

const stations = [
    {
        name: 'House',
        url: 'http://streaming.tdiradio.com:8000/house.mp3'
    },
    {
        name: 'Chill Out',
        url: 'http://streaming.tdiradio.com:8000/chillout.mp3'
    },
    {
        name: `Pop R'n'B Hits`,
        url: 'http://streaming.tdiradio.com:8000/poprnbhits.mp3'
    }
]

export const MediaPage = props => {
    const [station, setStation] = useState(stations)
    // const [track, setTrack] = useState('')

    let audio = new Audio()

    const getTrack = id => {
        const myTrack = station.find(item => item.name === id)
        // setTrack(myTrack.url)
        audio.src=myTrack.url
        audio.play()
    }

    const pauseTrack = () => {
        audio.pause()
    }

    return (
        <div>
            {station.map(item => (
                <PlayerItem
                    pauseTrack={pauseTrack}
                    audio={item}
                    getTrack={getTrack}
                />
            ))}
        </div>
    )
}

