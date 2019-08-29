import React from "react";

const TodoCard = (props) => {

    console.log(props);

    return (
        <div>
            {props.todoItem.map((todo) => {
                return (
                    <div>
                        <h3>{todo.id}</h3>
                        <h2>{todo.todoName}</h2>
                        <h2>{todo.todoDetails}</h2>
                        <h2>{todo.location}</h2>
                    </div>
                )

            })}

        </div>
    )
}

export default TodoCard