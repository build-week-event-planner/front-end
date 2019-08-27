import React from "react";
import Todo from "./TodoList/Todo";
import Vendor from "./VendorList/Vendor";

const AppRouter = () => {

    return (
        <div>
            <Vendor />
            <Todo />
        </div>
    )
}

export default AppRouter