import React, {useState} from 'react'
import personService from '../services/persons'
import Notification from "./Notification";

const PersonForm = (props) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ notification, setNotification ] = useState(null)

    const addPerson = (event) =>{
        event.preventDefault()
        const personObj = {name: newName, number: newNumber, id: props.persons.length+1}
        if(props.persons.some(person=>person.name===newName)) {
            let result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if(result===true){
                const x = props.persons.find(n=>n.name===newName)
                console.log('x', x)
                const changedPerson = { ...x, number: newNumber }
                console.log('ch', changedPerson)
                personService.changeNumberServer(x.id, changedPerson)
                    .then(response=>{
                        console.log('trtr', response)
                        const newPersons = props.persons.map(person=> person.name !== newName ? person: response.data)
                        props.setPersons(newPersons)
                        setNewName("")
                        setNewNumber("")
                    })
                    .catch(error=> {
                        setNotification(`Information of ${newName} has already been removed from server`)
                        setTimeout(() => {
                            setNotification(null)
                        }, 8000)
                    })
                    }
        }else {
            personService.addPersonServer(personObj)
                .then(response=>{
                    props.setPersons(response.data)
                })
            notify()
            setNewName('')
            setNewNumber('')
        }
    }

    const notify = () =>{
        setNotification(`Added ${newName}`)
        console.log('n', notification)
        setTimeout(() => {
            setNotification(null)
        }, 8000)
    }

    const handleNameChange = (event) =>{
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) =>{
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    return(
        <form onSubmit={addPerson}>
            <div>
            <Notification note={notification}/>
            </div>
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
    )
}

export default PersonForm