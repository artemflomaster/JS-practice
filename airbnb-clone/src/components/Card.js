import React from "react";
import star from "../Star.png"
// import kate from "../cathrin.png"
export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div>
                <img className="card-img" src={`../${props.coverImg}`} alt={props.coverImg} />
            </div>
            <div><img className="star" src={star} alt="Star"/> {props.stats.rating} ({props.stats.reviewCount}) {props.location}</div>
            <div>{props.title}</div>
            <div><span className="bold">From ${props.price} </span>/ person</div>
        </div>
    )
}
// src={`../${props.img}`}
// src={kate}

