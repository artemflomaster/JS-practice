import React from "react"
import logo from "./logo192.png"
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} className="logo-img" alt="logo" />
                <div className="logo-text">ReactFacts</div>
            </div>
            <div className="nav-header">
                React Course - Project 1
            </div>            
        </div>
    )
}