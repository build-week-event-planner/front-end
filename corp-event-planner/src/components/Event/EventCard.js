import React  from "react";
import Todo from "../TodoList/Todo";
import Vendor from "../VendorList/Vendor";

const EventCard = () => {

    return (
        <div>
            {props.event.map( event => {
            
            return (
                <div>
                    <h3>Event form element 1</h3>
                    <h3>2</h3>
                    <h3>3</h3>
                    <h3>4</h3>
                    <h3>5</h3>
                    
                    
                </div>   
                
                
            ) 
                
            })}
            
            <Todo />
            <Vendor />

        </div>

    )
}

export default EventCard