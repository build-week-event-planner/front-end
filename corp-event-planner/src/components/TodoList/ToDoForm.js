import React, { useState } from "react";

import styled from "styled-components";


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

    const TForm = styled.div`
        display: flex;
        flex-flow: column wrap;
        width: 750px;
        border: 3px solid #1D3461;
        margin: 50px auto;
        padding: 100px;

    
    `


    return (
        <TForm>
        <form onSubmit={submitForm} className="form" style={{ textAlign: "center" }}>
                <label htmlFor="id"> ToDo Item # </label>
                <input
                     className="form-control"
                    type="text"
                    name="id"
                    placeholder="To Do #"
                    value={todo.id}
                    onChange={tdchangeHandler}
                    style={{ padding: "30px, 300px" }}

                />

                <label htmlFor="todoName"> Todo Name</label>
                <input
                    className="form-control"
                    type="text"
                    name="todoName"
                    placeholder="ToDo Name"
                    value={todo.todoName}
                    onChange={tdchangeHandler}
                    style={{ padding: "30px, 300px" }}

                />

                <label htmlFor="todoDetails"> Todo Details</label>
                <input
                    className="form-control"
                    type="text"
                    name="todoDetails"
                    placeholder="ToDo Details"
                    value={todo.todoDetails}
                    onChange={tdchangeHandler}
                    style={{ padding: "30px, 300px" }}

                />


                <label htmlFor="location"> Location</label>
                <input
                    className="form-control"
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={todo.location}
                    onChange={tdchangeHandler}
                    style={{ padding: "30px, 300px" }}

                />


                <button type="submit"> Add Todo </button>


            </form>
            </TForm>

    )
}


export default TodoForm

