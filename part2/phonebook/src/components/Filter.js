import React from 'react'

const Filter = (props) => {
    const handleFilter = (event) =>{
        console.log(event.target.value)
        props.setNewFilter(event.target.value.toLowerCase())
    }
    return(
        <div>
            filter shown with <input value={props.newFilter} onChange={handleFilter}/>
        </div>
    )
}

export default Filter