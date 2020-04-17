import React from "react"
import { Link } from "react-router-dom"
import './header.css'

export const Header = () => {
    return (
        <header className="header-app">
            <div className="container">
                <div className="header-wrapper">
                    <Link className="logo link" to="/">Social.Net</Link>
                    <button className="btn _secondary">Exit</button>
                </div>
            </div>
        </header>
    )
}