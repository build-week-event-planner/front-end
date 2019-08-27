import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";

const SignUpForm = props => {

    // const [signUpForm, setSignUpForm] = useState({
    //     fullname: "",
    //     email: "",
    //     password: "",
    //     companyname: "",
    //     poc: "",
    //     eventdescription: ""

    return (
        <div className="SignUpForm">
            <h1>Sign Up</h1>
            {/* <Formik
                initialValues={{
                    contact: {

                    },
                }} */}
                <button type="submit">Sign Up</button>


        </div>
    )
}

export default SignUpForm