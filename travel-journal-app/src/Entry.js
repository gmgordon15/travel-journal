import React from 'react'

function Entry(props) {
    return (
        <div className="Entry-Container">
            <img src={props.imageUrl} className="card-images"/>
            <div className="Information-Div">
                <div className="Location-Link-Div">
                <div className="location"> {props.location} </div>
    <div className="link"> {props.googleMapsUrl}</div>
                </div>
    <div className="Title">{props.title}</div>
                <div className="Start-End-Container">
    <div className="Start-Date">{props.startDate}</div>
    <div className="End-Date"> {props.endDate}</div>
                </div>
                <div className="Discription"> {props.description}
                </div>
            </div>
        </div>
    )
}

export default Entry
