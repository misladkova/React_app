import React from 'react'
import Person from "./Person";

const Persons = (props) => {
    return(
        <ul>
            {props.personsFiltered.map(person=> <Person key={person.id} name={person.name} number={person.number}/>)}
        </ul>
    )
}

export default Persons