import React, { useState } from 'react'
import Person from "./components/Person";

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas'}
    ])
    const [ newName, setNewName ] = useState('')

    const addName = (event) =>{
        event.preventDefault()
        const personObj = {name: newName}
        if(persons.some(person=>person.name===newName)) {
            window.alert(`${newName} was already added to phonebook`)
            setNewName('')
        }else {
            setPersons(persons.concat(personObj))
            setNewName('')
        }
    }

    const handleNameChange = (event) =>{
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person=> <Person name={person.name}/>)}
            </ul>
        </div>
    )
}

export default App