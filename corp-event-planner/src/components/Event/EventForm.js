import React, {useState} from "react";

import axios from "axios";



const EventForm = () => {

    const [event, setEvent] = useState([])

    console.log("EventForm:", event);

    useEffect(() => {
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
        <div> This is returning the Event form
            
        

        </div>
    )
}





export default EventForm