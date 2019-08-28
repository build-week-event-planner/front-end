import React, {useState, useEffect} from "react";

import axios from "axios";



const EventForm = () => {

    const [event, setEvent] = useState([])


    useEffect( () => {
        axios.get("https://corporate-event-planner.herokuapp.com/events/all")
            .then(res => { 
                setEvent(res.data);
                console.log(res.data);



            })
            .catch(err => {
                console.log(err )
                
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