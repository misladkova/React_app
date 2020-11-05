import React, { useState } from 'react'

const App = () =>{

    const [filter, setFilter] = useState('')

    const handleChange = (event) =>{
        console.log(event.target.value)
        setFilter(event.target.value.toLowerCase())
    }

    return(
        <div>
            find countries <input value={filter} onChange={handleChange}/>
        </div>
    )
}

export default App