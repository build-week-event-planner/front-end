import React, {useState, useEffect} from "react";

import axios from "axios";



const EventForm = () => {

    const [event, setEvent] = useState([])


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

    console.log("EventForm:", event);

    

    return (
        <div>
        </div>
    )
}

            

export default EventForm