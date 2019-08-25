import React, {useState} from "react";


const TodoForm = (props) => {

    const [todos, setTodos] = useState([]);

    console.log(todos)

    const changeHandler = event => {

        setTodos({...todos, [event.target.name]: event.target.value});

    }

    const submitForm = event => {
        event.preventDefault();
    

        const newTodo = {
            todos,
            id: Date.now()

      }
    }   


    return (
            <form onSubmit={submitForm} className="form">
                <label htmlFor="id"> ToDo Item # </label>
                <input
                    type="text"
                    name="id"
                    placeholder="To Do #"
                    value={todo.id}
                    onChange={changeHandler}

                />

                <label htmlFor="name"> Todo Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="ToDo Name"
                    value={todo.name}
                    onChange={changeHandler}

                />


                <label htmlFor="status"> Status </label>
                <input
                    type="radio"
                    name="statusRadios"
                    placeholder="Character ID #"
                    value="option1"
                    onChange={changeHandler}
                    checked
                />

                <label htmlFor="species">Species</label>
                <input
                    type="text"
                    name="species"
                    placeholder="Species"
                    value={char.species}
                    onChange={changeHandler}

                />


                <label htmlFor="gender"> Gender</label>
                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={char.gender}
                    onChange={changeHandler}

                />


                <label htmlFor="origin"> Origin </label>
                <input
                    type="text"
                    name="origin"
                    placeholder="Origin"
                    value={char.id}
                    onChange={changeHandler}

                />


                <label htmlFor="location"> Location</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={char.location}
                    onChange={changeHandler}

                />


                <label htmlFor="created"> Date Created</label>
                <input
                    type="date"
                    name="created"
                    placeholder="Created"
                    value={char.created}
                    onChange={changeHandler}

                />

                <button type="submit"> Add Character </button>

            </form>

    )



}



export default TodoForm