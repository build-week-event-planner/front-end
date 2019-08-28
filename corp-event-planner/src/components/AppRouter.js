import React from "react";

import Vendor from "./VendorList/Vendor";
import Todo from "./TodoList/Todo";

const AppRouter = () => {

    return (
        <div>
            <Vendor />
            <Todo />
        </div>
    )
}

export default AppRouter