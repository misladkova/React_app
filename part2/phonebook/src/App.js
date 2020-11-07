import React, { useState, useEffect } from 'react'
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import personsService from "./services/persons";

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newFilter, setNewFilter ] = useState('')

    useEffect(() => {
        console.log('effect')
        personsService.getPersonServer()
            .then(response=>{
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }, [])
    console.log('render', persons.length, 'persons')

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter}/>
            <h2>add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons}/>
            <h2>Numbers</h2>
            <Persons persons={persons} newFilter={newFilter}/>
        </div>
    )
}

export default App