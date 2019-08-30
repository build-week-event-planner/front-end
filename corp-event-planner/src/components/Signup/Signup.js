import React, { useState } from "react";

// import SignUpForm from "./SignUpForm";

const Signup = props => {

    const [credentials, setCredentials] = useState( {} ),

    const signup = event => {
        event.preventDefault();
        
    }

    return (
        <form onSubmit={signup} className="signUpForm">
            <label htmlFor="userName"> Username</label>
            <input
                type="text"
                name="userName"
                placeholder="UserName"
                value={credentials.userName}
                onChange={changeHandler}
            />

            <label htmlFor="password"> Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={changeHandler}
            />

            <label htmlFor="reenterpw"> Re-Enter Password</label>
            <input
                type="password"
                name="password"
                placeholder="Re-Enter Password"
                value={credentials.reenterpw}
                onChange={changeHandler}
            />

            <label htmlFor="email"> Email</label>
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={changeHandler}
            />

            <button type="submit">Sign Up</button>

        </form>
    )
}

export default Signup