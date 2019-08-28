import React, { useState } from "react";


const TodoForm = (props) => {

    const [todo, setTodo] = useState({id: "", todoName: "", todoDetails: "", location: ""});

    console.log(todo);

    const tdchangeHandler = event => {

        setTodo({...todo, [event.target.name]: event.target.value});

    }

    const submitForm = event => {
        event.preventDefault();
    

        const newTodo = {
            ...todo,
            id: Date.now()


         };

      props.addTodo(newTodo);
      
    }   


    return (
            <form onSubmit={submitForm} className="form">
                <label htmlFor="id"> ToDo Item # </label>
                <input
                    type="text"
                    name="id"
                    placeholder="To Do #"
                    value={todo.id}
                    onChange={tdchangeHandler}

                />

                <label htmlFor="todoName"> Todo Name</label>
                <input
                    type="text"
                    name="todoName"
                    placeholder="ToDo Name"
                    value={todo.todoName}
                    onChange={tdchangeHandler}

                />

                <label htmlFor="todoDetails"> Todo Details</label>
                <input
                    type="text"
                    name="todoDetails"
                    placeholder="ToDo Details"
                    value={todo.todoDetails}
                    onChange={tdchangeHandler}

                />


                <label htmlFor="location"> Location</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={todo.location}
                    onChange={tdchangeHandler}

                />


                <button type="submit"> Add Todo </button>


            </form>

    )
}


export default TodoForm

