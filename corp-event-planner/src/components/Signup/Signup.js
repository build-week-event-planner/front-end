import React from "react";

// import SignUpForm from "./SignUpForm";

const Signup = () => {

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

            {/* <label htmlFor="email"> Email</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={changeHandler}
            /> */}

            <button type="submit">Login</button>

        </form>
    )
}

export default Signup