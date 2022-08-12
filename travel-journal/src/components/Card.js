import React from "react";

export default function Card(props) {
    return (
        <div className="card-wrapper">
            <div className="card">
                <img className="card-img" src={props.image} alt={props.location} />
                <div className="information">
                    <div className="location">
                        <img src="./images/location.png" alt="location mark" />
                        <span className="location--country">{props.location}</span>
                        <span className="location--link"><a href={props.linkToMap} target="_blank">View on Google Maps</a></span>
                    </div>
                    <div className="title">{props.title}</div>
                    <div className="dates">{props.dates}</div>
                    <div className="description">{props.description}</div>


                </div>

            </div>
            <hr></hr>
        </div>

    )
}