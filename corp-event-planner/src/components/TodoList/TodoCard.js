import React from "react";


const TodoCard = (props) => {

    console.log(props);

    return (
        <div>
            {props.todoItem.map((todo) => {
                return (
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="card-title">{todo.todoName}</h3>
                                    <p class="card-text">{todo.todoDetails}</p>
                                    <h5 class="card-title">{todo.id}</h5>
                                    {/* <!-- Button trigger modal --> */}
                                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                                        See Todo Details
                                </button>
                                   
                                    {/* Modal  */}
                                    <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-scrollable" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalScrollableTitle">Todo Name: {todo.todoName}</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <p> Todo Locaiton: {todo.location} </p>
                                                    <p> Todo Details: {todo.todoDetails} </p>
                                                 

                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary" >Close Todo</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> 
                   
                
            )

            })}

        </div>

    )
}

export default TodoCard