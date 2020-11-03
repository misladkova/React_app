import React from 'react'
import Part from "./Part";

const Content = (props) => {
    console.log(props)
    return (
        <div>
            {props.parts.map(x=><Part key={x.id} name={x.name} exercises={x.exercises}/>)}
        </div>
    )
}

export default Content