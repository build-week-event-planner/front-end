import React  from "react";


const EventCard = (props) => {

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

        </div>

    )
}

export default EventCard