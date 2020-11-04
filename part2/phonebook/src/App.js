import React, { useState } from 'react'
import Person from "./components/Person";

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '032-9876544', id: 1}
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')

    const addPerson = (event) =>{
        event.preventDefault()
        const personObj = {name: newName, number: newNumber, id: persons.length+1}
        if(persons.some(person=>person.name===newName)) {
            window.alert(`${newName} was already added to phonebook`)
        }else {
            setPersons(persons.concat(personObj))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNameChange = (event) =>{
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) =>{
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilter = (event) =>{
        console.log(event.target.value)
        setNewFilter(event.target.value.toLowerCase())
    }

    const personsFiltered = persons.filter(person=>person.name.toLowerCase().includes(newFilter))

    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with <input value={newFilter} onChange={handleFilter}/>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {personsFiltered.map(person=> <Person key={person.id} name={person.name} number={person.number}/>)}
            </ul>
        </div>
    )
}

export default App