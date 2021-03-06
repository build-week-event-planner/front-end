import React, {useState} from "react";
import EventForm from "./EventForm";
import EventCard from "./EventCard";
import EventData from "./EventData";


const SingleEvent = () => {

    const [eventItem, setEventItem] = useState(EventData);

    console.log(eventItem)

    const addNewEvent = singleevent => { setEventItem([...eventItem, singleevent]) };

    return (

        <div className="singleEvent" style={{ margin: "50px" }}>
            <h2 style={{ textAlign: "center" }} >Create a New Event to Manage!</h2>
            <EventForm addNewEvent={addNewEvent}  />
            <EventCard eventItem={eventItem} />
            
       </div>
    )
}

export default SingleEvent