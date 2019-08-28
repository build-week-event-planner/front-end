import React, { useState } from "react";

const LoginForm = (props) => {

    const [login, setLogin] = useState({ userName: "", password: ""});

    console.log(login);

    const changeHandler = event => {

        setLogin({...login, [event.target.name]: event.target.value});
    }


    const submitForm = event => {
        event.preventDefault()

        const newLogin = {
            ...login,
            id: Date.now()
        };

        props.addLogin(newLogin)
    }

    return (
        <form onSubmit={submitForm} className="loginForm">
            <label htmlFor="userName"> Username</label>
                <input 
                    type="text"
                    name="userName"
                    placeholder="UserName"
                    value={login.userName}
                    onChange={changeHandler}
                />

            <label htmlFor="password"> Password</label>
                <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    value={login.password}
                    onChange={changeHandler}
                />
                
            <button type="submit">Login</button>

        </form>
    )
}

export default LoginForm