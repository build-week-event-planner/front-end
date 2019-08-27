import React, {useState} from "react";

import TodoData from "./TodoData";

import TodoCard from "./TodoCard";
import TodoForm from "./ToDoForm";

const Todo = () => {

    const [todoItem, setTodoItem] = useState(TodoData);

    console.log(todoItem)

    const addTodo = td => {setTodoItem([...todoItem, td])};

    return (
        <div className="Todo">
            <h2> Add a Todo Item to Your Event!</h2>
            <TodoForm addTodo={addTodo} />
            <TodoCard todoItem={todoItem} />

        </div>
    )
};

export default Todo