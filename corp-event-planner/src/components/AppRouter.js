import React, {useState} from "react";
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


    function useCustomHook(name) {
        const [storage, setStorage] = useState(localStorage.getItem(name));

        const placeInStorage = value => {
            localStorage.setItem(name, value);
            setStorage(value);
        };
        const removeFromStorage = () => {
            localStorage.removeItem(name);
            setStorage();
        };
        return [storage, placeInStorage, removeFromStorage];
    }}

    export default AppRouter
