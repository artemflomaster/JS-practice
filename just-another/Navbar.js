// import React from "react"

export default function Navbar() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <img src="./react-logo.svg" className="logo-img" />
                    <span className="logo-text">ReactFacts</span>
                </div>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
