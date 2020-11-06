import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Country from "./components/Country";

const App = () => {

    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [display, setDisplay] = useState('')

    const handleChange = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value.toLowerCase())
        setDisplay('')
    }

    useEffect(() => {
        console.log('effect')
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
            })
    }, [])
    console.log('render', countries.length, 'countries')


    const filteredCountries = () => {
        const filtered = countries.filter(country => country.name.toLowerCase().includes(filter))
        if(display !== ''){
            console.log(filtered[0])
            return <Country country={display} setDisplay={setDisplay} show={true}/>
        }
        if (filtered.length > 10) {
            return 'Too many matches, specify another filter'
        }
        else if ((filtered.length > 1 && filtered.length <= 10)) {
            return filtered.map(country => <Country country={country} setDisplay={setDisplay} show={false}/>)
        }
    }

    return (
        <div>
            find countries <input value={filter} onChange={handleChange}/>
            {filteredCountries()}
        </div>
    )
}

export default App