import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () =>{

    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    const handleChange = (event) =>{
        console.log(event.target.value)
        setFilter(event.target.value.toLowerCase())
    }

    useEffect(() =>{
        console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response=>{
                console.log('promise fulfilled')
                setCountries(response.data)
            })
    }, [])
    console.log('render', countries.length, 'countries')

    return(
        <div>
            find countries <input value={filter} onChange={handleChange}/>
        </div>
    )
}

export default App