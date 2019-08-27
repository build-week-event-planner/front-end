import React from "react";

const TodoCard = props => {

    return (
        <div>
        {props.todos.map(todo => {
            return (
                <div>
                    <h3>{todo.id}</h3>
                    <h2>{todo.todoName}</h2>
                    <p>{todo.todoDetails}</p>
                    <p>{todo.location}</p>
                    <p>{todo.created}</p>
                
                </div>


                )
    
        })}

        </div>
    )

}
export default TodoCard