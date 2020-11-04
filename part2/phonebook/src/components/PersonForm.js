import React from 'react'

const PersonForm = (props) => {

    const addPerson = (event) =>{
        event.preventDefault()
        const personObj = {name: props.newName, number: props.newNumber, id: props.persons.length+1}
        if(props.persons.some(person=>person.name===props.newName)) {
            window.alert(`${props.newName} was already added to phonebook`)
        }else {
            props.setPersons(props.persons.concat(personObj))
            props.setNewName('')
            props.setNewNumber('')
        }
    }

    const handleNameChange = (event) =>{
        console.log(event.target.value)
        props.setNewName(event.target.value)
    }

    const handleNumberChange = (event) =>{
        console.log(event.target.value)
        props.setNewNumber(event.target.value)
    }

    return(
        <form onSubmit={addPerson}>
            <div>
                name: <input value={props.newName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={props.newNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm