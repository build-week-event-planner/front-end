import React, { useState } from "react";


const EventForm = (props) => {

    const [singleevent, setSingleEvent] = useState({ id: "", eventName: "", eventDetails: "", location: "" });

    console.log(singleevent);

    const eChngHandler = event => {

        setSingleEvent({ ...singleevent, [event.target.name]: event.target.value });

    }

    const submitForm = event => {
        event.preventDefault();


        const newSingleEvent = {
            ...todo,
            id: Date.now()


        };

        props.addNewEvent(newSingleEvent);

    }


    return (
        <form onSubmit={submitForm} className="form">
            <label htmlFor="id"> Event ID # </label>
            <input
                type="text"
                name="id"
                placeholder="Event Id #"
                value={singleevent.id}
                onChange={eChngHandler}

            />

            <label htmlFor="eName"> Event Name</label>
            <input
                type="text"
                name="eName"
                placeholder="Event Name"
                value={singleevent.eName}
                onChange={eChngHandler}

            />

            <label htmlFor="todoDetails"> Event Details</label>
            <input
                type="text"
                name="eDetails"
                placeholder="Event Details"
                value={singleevent.eDetails}
                onChange={eChngHandler}

            />


            <label htmlFor="location"> Event Location</label>
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={singleevent.location}
                onChange={eChngHandler}

            />


            <button type="submit"> Create Event </button>


        </form>

    )
}


export default TodoForm

