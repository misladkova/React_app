import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = (props) =>{
    console.log(props)
    const {handleClick, text} = props
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const setToGood = (increment) =>{
        console.log(increment)
        setGood(increment)
    }
    const sumGood = ({good}) =>{
        console.log(good)
        return(
            {good}
        )
    }
    const setToNeutral = (increment) =>{
        console.log(increment)
        setNeutral(increment)
    }
    const sumNeutral = ({neutral}) =>{
        console.log(neutral)
        return(
            {neutral}
        )
    }
    const setToBad = (increment) =>{
        console.log(increment)
        setBad(increment)
    }
    const sumBad = ({bad}) =>{
        console.log(bad)
        return(
            {bad}
        )
    }


    return(
        <div>
            <h1>give feedback</h1>
            <Button handleClick={()=>setToGood(good+1)} text={'good'}/>
            <Button handleClick={()=>setToNeutral(neutral+1)} text={'neutral'}/>
            <Button handleClick={()=>setToBad(bad+1)} text={'bad'}/>
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)

