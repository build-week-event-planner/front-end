import React, { useEffect, useState } from "react";

const SignUpForm = props => {

    return (
        <div className="SignUpForm">
            <form>
                <label htmlFor="companyname" hidden>Company Name </label>
                <input type="text" name="companyname" placeholder="Company Name" />

                <label htmlFor="poc" hidden>Point of Contact </label>
                <input type="text" name="poc" placeholder="Point of Contact" />
            </form>

        </div>
    )
}

export default SignUpForm