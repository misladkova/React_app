import React from 'react'
import Part from "./Part";

const Content = (props) => {
    console.log(props)
    const total = props.parts.reduce((sum, x)=>sum+x.exercises, 0)
    return (
        <div>
            {props.parts.map(x=><Part key={x.id} name={x.name} exercises={x.exercises}/>)}
            <p>total of {total} exercises</p>
        </div>
    )
}

export default Content