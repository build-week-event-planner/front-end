import React from "react";
import Dashboard from "../components/Dashboard";
import Logout from "../components/Logout";

const AppRouter = () => {

    const [token, setToken, removeToken] = useCustomHook("token");

    return (
        <div className="AppRouter">
            {token ? <Dashboard /> : <Logout />}
            <button onClick={() => setToken("myToken")}> Log In </button>
            
            
        </div>
    )


function useCustomHook()

}

export default AppRouter