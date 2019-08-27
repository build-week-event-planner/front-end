import React, { useState, useEffect } from "react";
import axios from "axios";
import EventForm from "./EventForm";

const EventCard = () => {

    const [eventCard, setEventCard] = useState('');

    return (
        <div>
            <EventForm />

        </div>
    )
}

export default EventCard