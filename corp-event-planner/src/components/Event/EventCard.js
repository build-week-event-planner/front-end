import React  from "react";
import Todo from "../TodoList/Todo";
import Vendor from "../VendorList/Vendor";
import Calendar from "../Calendar";
import "./Event.css";

import styled from 'styled-components';


const ECard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border; 2px solid black;
    border-radius: 10px;
    margin: 30px auto;
    padding: 50px;


`

const EventCard = (props) => {

    console.log("eventProps:", props)

    return (
        <div className="mainCard">
            
            {props.eventItem.map( singleevent => {
            
            return (
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">{singleevent.eName}</h3>
                                <p class="card-text">{singleevent.eDetails}</p>
                                <h5 class="card-title">{singleevent.location}</h5>
                                {/* <!-- Button trigger modal --> */}
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                                    See Event Details
                                </button>

                                {/* Modal  */}
                                <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-scrollable" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalScrollableTitle">Event Name: {singleevent.eName}</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p> Event Locaiton: {singleevent.location} </p>
                                                <p> Event Details: {singleevent.eDetails} </p>
                                                
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Add Todo Item</button>
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Add Vendor</button>
                                                <button type="button" class="btn btn-primary">Close Event Details</button>
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

export default EventCard