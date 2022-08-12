import React from "react";
import hero from "../hero.png"

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero-img" src={hero} alt="hero" />
      <div className="hero-text">
        <h1>Online Experiences</h1>
        Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.</div>
    </div>
  )
}