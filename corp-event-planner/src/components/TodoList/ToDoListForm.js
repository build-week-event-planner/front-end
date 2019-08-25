import React, {useState, useEffect} from "react";
import {Form, Field, withFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";

const TodoForm = ({errors, touched, values, status}) => {

    const [todos, setTodos] = useState([]);

    console.log(todos)

    useEffect ( () => {
        
        if (status) {
            setTodo([...todos, status]);

        }
    }, [status]);

    return (
        <div className="TodoForm">
            <Form>
                <Field
                    component="input"
                    type="text"
                    name="todoName"
                    placeholder="Enter the Name of Your ToDo Item"
                />
                     {touched.todoName && errors.todoName && (
                    <p className="error">{errors.todoName}</p>
                )}

                <Field
                    component="input"
                    type="text"
                    name="location"
                    placeholder="Enter Todo Location Here"
                />
                {touched.location && errors.location && (
                    <p className="error">{errors.location}</p>
                )}


                <Field 
                    component="input"
                    type="textarea"
                    name="todoDetails"
                    placeholder="Enter more details here"
                />
                {touched.todoDetails && errors.todoDetails && (
                    <p className="error">{errors.todoDetails}</p>
                )}

                        
                <label className="check">
                    Mark as Completed
                <Field
                    type="checkbox"
                    name="completed"
                    placeholder="Mark as Complete"
                    checked={values.checkbox}
                />
                </label>

            </Form>

            {todos.map(todo => {
                <p key={todo.id}>{todo.name}</p>
            
            })}

        </div>

    )



}

const handleTodoFormChng = withFormik({
    mapPropsToValues({ todoName, location, todoDetails, checkbox}) {

        return {
            todoName: todoName || "",
            location: location || "",
            todoDetails: todoDetails || "",
            checkbox: checkbox || false 

        }
    }
})




export default TodoForm