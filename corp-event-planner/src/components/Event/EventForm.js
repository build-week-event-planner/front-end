import React, {useState} from "react";
import {Form, Field, withFormik} from "formik";

import axios from "axios";



const EventForm = () => {

    const [event, setEvent] = useState([])

    console.log("EventForm:", event);

    

    return (
        <div className="eventForm">
            <Form>

            form fields and values are set here


            </Form>
        

        </div>
    )
}




const formikOnChange = withFormik({
    mapPropsToValues( { props go here }) {

        return {

            values from form go here
        };

    };


})

const eventFormWithFormik = formikOnChange(EventForm)


export default eventFormWithFormik