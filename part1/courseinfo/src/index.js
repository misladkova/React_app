import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1> {props.course} </h1>
        </div>
    )
}

const Part = (props) => {
    console.log(props)
    return(
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part = {props.part1} exercises = {props.exercises1}/>
            <Part part = {props.part2} exercises = {props.exercises2}/>
            <Part part = {props.part3} exercises = {props.exercises3}/>
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                Number of exercises {props.totalExercises}
            </p>
        </div>
    )
}

const App = () => {

    const course = 'Half Stack application development'
    // const part1 = {
    //     name: 'Fundamentals of React',
    //     exercises: 10
    // }
    // const part2 = {
    //     name: 'Using props to pass data',
    //     exercises: 7
    // }
    // const part3 = {
    //     name: 'State of a component',
    //     exercises: 14
    // }

    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]

    return (
        <div>
            <Header course={course}/>
            <Content part1 = {parts[0].name} exercises1 = {parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises}
                     part3={parts[2].name} exercises3={parts[2].exercises}/>
            <Total totalExercises = {parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))