import React  from "react";
import Todo from "../TodoList/Todo";
import Vendor from "../VendorList/Vendor";


const EventCard = (props) => {

    console.log("eventProps:", props)

    return (
        <div>
            {props.eventItem.map( singleevent => {
            
            return (
                <div>
                    <h3>{singleevent.id}</h3>
                    <h3>{singleevent.eName}</h3>
                    <h3>{singleevent.eDetails}</h3>
                    <h3>{singleevent.location}</h3>                    
                    <Todo />
                    <Vendor />
                </div>     
                
            ) 
                
            })}

        </div>

    )
}

export default EventCard