import React from 'react'

const CountryInfo = (props) =>{
    console.log('gf', props)
    const {capital, population, languages, flag} = props.country
    return(
        <div>
    capital {capital}<br/>
    population {population}
    <h3>languages</h3>
    {languages.map(lang=><li>{lang.name}</li>)}
            <img src={flag} alt={'flag'} width={500} height={400}/></div>)

}

export default CountryInfo