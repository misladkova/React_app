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

    const filteredCountries = () =>{
        const filtered = countries.filter(country=>country.name.toLowerCase().includes(filter))
            if(filtered.length>1 && filtered.length<=10) {
                return <ul>{filtered.map(country => <li>{country.name}</li>)}</ul>
            }
            if(filtered.length>10) {
                return 'Too many matches, specify another filter'
            }else{
                return filtered.map(country=><div><h2>{country.name}</h2> capital {country.capital}<br />
                    population {country.population} <h3>languages</h3> <li>{}</li>
                    <img src={country.flag} alt={'flag'} width={500} height={400}/></div>)
            }
    }

    return(
        <div>
            find countries <input value={filter} onChange={handleChange}/>
            {filteredCountries()}
        </div>
    )
}

export default App