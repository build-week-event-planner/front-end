import React, {useState} from "react";


const TodoForm = (props) => {

    const [todo, setTodo] = useState({id: "", todoName: "", todoDetails: "", location: "", created: ""});

    console.log(todo);

    const changeHandler = event => {

        setTodo({...todo, [event.target.name]: event.target.value});

    }

    const submitForm = event => {
        event.preventDefault();
    

        const newTodo = {
            ...todo,
            created: Date.now()


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
                    onChange={changeHandler}

                />

                <label htmlFor="todoName"> Todo Name</label>
                <input
                    type="text"
                    name="todoName"
                    placeholder="ToDo Name"
                    value={todo.todoName}
                    onChange={changeHandler}

                />

                <label htmlFor="todoDetails"> Todo Details</label>
                <input
                    type="text"
                    name="todoDetails"
                    placeholder="ToDo Details"
                    value={todo.todoDetails}
                    onChange={changeHandler}

                />


                <label htmlFor="location"> Location</label>
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={todo.location}
                    onChange={changeHandler}

                />


                <label htmlFor="created"> Date Created</label>
                <input
                    type="date"
                    name="created"
                    placeholder="Created"
                    value={todo.created}
                    onChange={changeHandler}

                />


                <button type="submit"> Add Todo </button>


            </form>

    )
}


export default TodoForm

