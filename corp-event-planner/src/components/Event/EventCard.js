import React, { useState, useEffect } from "react";
import EventForm from "./EventForm";
import Todo from "../TodoList/Todo";
import Vendor from "../VendorList/Vendor";

const EventCard = () => {

    const [eventCard, setEventCard] = useState('');

    return (
        <div>
            <EventForm />
            <Todo />
            <Vendor />
        </div>
    )
}

export default EventCard