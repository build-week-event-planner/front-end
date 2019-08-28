import React, {useState} from "react";
import axiosWithAuth from "../../axiosAuth";

const Login = (props) => {

    const [credentials, setCredentials] = useState({});

    const login = event => {
        event.preventDefault();
        axiosWithAuth.post('https://corporate-event-planner.herokuapp.com/login', credentials)
                .then(res => {
                    console.log(res.data)
                    localStorage.setItem('token', res.data.token);
                    this.props.history.push('/');
                })
    }

    const changeHandler = event => {

        setCredentials({
            ...credentials,
             [event.target.name]: event.target.value 
            });
    }

    return (
        <form onSubmit={login} className="loginForm">
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

            <button type="submit">Login</button>

        </form>
    )
}

export default Login