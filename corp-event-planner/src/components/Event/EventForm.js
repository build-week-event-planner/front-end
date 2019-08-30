import React, { useState } from "react";
import "./Event.css";

import styled from "styled-components";


const EventForm = (props) => {

    const [singleevent, setSingleEvent] = useState({ id: "", eventName: "", eventDetails: "", location: "" });

    console.log(singleevent);

    const eChngHandler = event => {

        setSingleEvent({ ...singleevent, [event.target.name]: event.target.value });

    }

    const submitForm = event => {
        event.preventDefault();


        const newSingleEvent = {
            ...singleevent,
            id: Date.now()


        };

        props.addNewEvent(newSingleEvent);

    }

    const EForm = styled.div`
        display: flex;
        flex-flow: column wrap;
        width: 750px;
        border: 3px solid #1D3461;
        margin: 50px auto;
        padding: 100px;

    
    `


    return (
        <EForm >
        <form onSubmit={submitForm} className="form" style={{textAlign: "center"}}>
            <h2>Create A New Event!</h2>
            <label htmlFor="id"> Event ID # </label>
            <input
                className="form-control"
                type="text"
                name="id"
                placeholder="Event Id #"
                value={singleevent.id}
                onChange={eChngHandler}
                style={{padding: "30px, 300px"}}

            />

            <label htmlFor="eName"> Event Name</label>
            <input
                className="form-control"
                type="text"
                name="eName"
                placeholder="Event Name"
                value={singleevent.eName}
                onChange={eChngHandler}

            />

            <label htmlFor="eDetails"> Event Details</label>
            <input
                className="form-control"
                type="text"
                name="eDetails"
                placeholder="Event Details"
                value={singleevent.eDetails}
                onChange={eChngHandler}

            />


            <label htmlFor="location"> Event Location</label>
            <input
                className="form-control"
                type="text"
                name="location"
                placeholder="Location"
                value={singleevent.location}
                onChange={eChngHandler}

            />


                <button type="submit" className="btn btn-primary"> Create Event </button>


        </form>
        </EForm>

    )
}


export default EventForm

