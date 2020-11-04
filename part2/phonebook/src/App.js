import React, { useState } from 'react'
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '032-9876544', id: 1}
    ])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')



    const personsFiltered = persons.filter(person=>person.name.toLowerCase().includes(newFilter))

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
            <h2>add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName}
            newNumber={newNumber} setNewNumber={setNewNumber}/>
            <h2>Numbers</h2>
            <Persons personsFiltered={personsFiltered}/>

        </div>
    )
}

export default App