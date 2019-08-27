import React, {useState} from "react";


const TodoForm = (props) => {

    const [todos, setTodos] = useState({id: "", todoName: "", todoDetails: "", location: "", created: ""})

    console.log(todos)

    const changeHandler = event => {

        setTodos({...todos, [event.target.name]: event.target.value});

    }

    const submitForm = event => {
        event.preventDefault();
    

        const newTodo = {
            ...todos,
            created: Date.now()


      }
    }   


    return (
            <form onSubmit={submitForm} className="form">
                <label htmlFor="id"> ToDo Item # </label>
                <input
                    type="text"
                    name="id"
                    placeholder="To Do #"
                    value={todos.id}
                    onChange={changeHandler}

                />

                <label htmlFor="name"> Todo Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="ToDo Name"
                    value={todos.todoName}
                    onChange={changeHandler}

                />

                <label htmlFor="name"> Todo Details</label>
                <input
                    type="text"
                    name="details"
                    placeholder="ToDo Details"
                    value={todos.todoDetails}
                    onChange={changeHandler}

                />


                <label htmlFor="location"> Location</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={todos.location}
                    onChange={changeHandler}

                />


                <label htmlFor="created"> Date Created</label>
                <input
                    type="date"
                    name="created"
                    placeholder="Created"
                    value={todos.created}
                    onChange={changeHandler}

                />


                <button type="submit"> Add Todo </button>


            </form>

    )



}



export default TodoForm

