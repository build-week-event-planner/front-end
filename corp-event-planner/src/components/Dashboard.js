import React from "react";
import Todo from "./TodoList/Todo";
import Vendor from "./VendorList/Vendor";
import Event from "./Event/Event";

const Home = () => {

    return (
        <div className="dashboard">
            <Event />
            <Todo />
            <Vendor />
        </div>
    )
}

export default Home