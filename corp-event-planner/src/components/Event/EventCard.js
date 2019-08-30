import React  from "react";
import Todo from "../TodoList/Todo";
import Vendor from "../VendorList/Vendor";
import Calendar from "../Calendar";

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
        <div>
            {props.eventItem.map( singleevent => {
            
            return (
                <ECard className="eventCard">
            
                    <h3>{singleevent.id}</h3>
                    <h3>{singleevent.eName}</h3>
                    <h3>{singleevent.eDetails}</h3>
                    <h3>{singleevent.location}</h3> 
                    <Calendar />                   
                    <Todo />
                    <Vendor />
                </ECard>     
                
            ) 
                
            })}

        </div>

    )
}

export default EventCard