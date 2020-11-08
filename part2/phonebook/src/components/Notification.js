import React from "react";

const Notification = ({note}) =>{
    if(note===null){
        return null
    }
    return(
        <div>{note}</div>
    )
}

export default Notification