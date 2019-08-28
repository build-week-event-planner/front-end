import React from "react";
import EventForm from "./EventForm";
import Todo from "../TodoList/Todo";
import Vendor from "../VendorList/Vendor";


const SingleEvent = () => {

    return (

       <div>
           <EventForm />
            <Todo />
            <Vendor />
       </div>
    )
}

export default SingleEvent