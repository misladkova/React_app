// const http = require('http')
const express = require('express')
const app = express()

app.use(express.json())

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
    response.json(persons)
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
    const id = Number(req.params.id)
    const x = persons.find(person=>person.id===id)
    if(x){
        res.json(x)
    }else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res)=>{
    const id = Number(req.params.id)
    persons = persons.filter(person=>person.id!==id)
    res.status(204).end()
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

