import React from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function LoggedIn(props) {
    return <div>Logged Out
        <Login />
        <Signup />

    </div>;
}

export default LoggedIn;