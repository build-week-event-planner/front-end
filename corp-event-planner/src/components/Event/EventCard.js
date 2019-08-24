import React {useState, useEffect} from "react";
import axios from "axios";
import EventForm from "./EventForm";

const EventCard = () => {

    const [eventCard, setEventCard] = useState('');


    useEffect( () => {
        axios.get("https://corporate-event-planner.herokuapp.com/events/all")
            .then(res => { 
                console.log(res.data);
                setEventCard(res.data);


            })
            .catch(err => {
                console.log(res)
                
            })

    }


    )

    return (
        <div>
            <EventForm />

        </div>
    )
}

export default EventCard