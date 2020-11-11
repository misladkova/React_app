// const http = require('http')
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('combined'))

let persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-43-234345'
    },
    {
        id: 4,
        name: 'Mary Poppendick',
        number: '39-23-6423122'
    }
]

// const app = http.createServer((request, response) =>{
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     response.end(JSON.stringify(persons))
// })

app.get('/', (request, response)=>{
    response.send('<h1>Hello world</h1>')
})

app.get('/api/persons', (request, response)=>{
    Person.find({}).then(persons=>{
        response.json(persons)
        })
})

app.post('/info', (req, res)=>{
    const info = req.body
    console.log('i', info)
    res.send(info)
})

app.get('/info', (req, res) => {
    const output = {}
    output.asdsa = `Phonebook has info for ${persons.length} people`,
    output.asddddd = new Date(),
    res.json(output)
})

app.get('/api/persons/:id', (req, res)=>{
    // const id = Number(req.params.id)
    // const x = persons.find(person=>person.id===id)
    // if(x){
    //     res.json(x)
    // }else {
    //     res.status(404).end()
    // }
    Person.findById(req.params.id).then(person => {
        res.json(person)
    })
})

app.delete('/api/persons/:id', (req, res)=>{
    const id = Number(req.params.id)
    persons = persons.filter(person=>person.id!==id)
    res.status(204).end()
})

app.post('/api/persons', (req, res)=>{
    const body = req.body
    const id = Math.floor(Math.random() * Math.floor(10000))
    // console.log('b', body)
    // const newPerson = {
    //     id: id,
    //     name: body.name,
    //     number: body.number
    // }
    const person = new Person({
        id: id,
        name: body.name,
        number: body.number
    })
    person.save().then(person => {
        response.json(person)
    })
    // const x = persons.find(x=>x.name===body.name)
    // if(x!==undefined){
    //     res.status(400).json({
    //         error: 'name must be unique'
    //     })
    // }else if(body.name==="" || body.number===""){
    //     res.status(400).json({
    //         error: 'both name and number are required'
    //     })
    // }else {
    //     persons = persons.concat(newPerson);
    //     res.json(persons)
    // }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

