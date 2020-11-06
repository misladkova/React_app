import React from 'react'
import CountryInfo from "./CountryInfo";

const Country = (props) => {

    const handleClick = () =>{
        props.setDisplay(props.country)
    }
    return (
        <div>
            <h2>{props.country.name}</h2>
            {props.show ? <CountryInfo country={props.country} /> :
                <button onClick={handleClick}>show</button>}
        </div>)
}

export default Country