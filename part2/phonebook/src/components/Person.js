import React from "react";
import personService from '../services/persons'

const Person = (props) =>{
    console.log("aaaa", props)
    const handleClick = () =>{
        let result = window.confirm(`Delete ${props.name}?`)
        if(result===true){
            console.log('h', props)
            personService.removePersonServer(props.id)
                .then(response=>{
                    console.log('k', response)
                    let aaa = props.persons.filter(x=>x.id!==props.id)
                    props.setPersons(aaa)
                })
        }
    }
    return(
        <li>{props.name} {props.number}<button onClick={handleClick}>delete</button> </li>
    )
}

export default Person