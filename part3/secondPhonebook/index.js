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


app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.post('/info', (req, res) => {
    const info = req.body
    console.log('i', info)
    res.send(info)
})

app.get('/info', (req, res) => {
    Person.find({}).then(persons => {
        console.log('rtvrtvgrtvrtv', persons)
        const output = {}
        output.text = `Phonebook has info for ${persons.length} people`
        output.date = new Date()
        res.json(output)
    })
})

app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }
        })
        .catch(error => {
            console.log(error)
            res.status(400).send({error: 'malformatted id'})
        })
})

app.delete('/api/persons/:id', (req, res) => {
    Person.findByIdAndRemove(req.params.id)
        .then(person => {
            Person.find({}).then(persons => {
                res.json(persons)
            })
        })
        .catch(error => console.log(error))
})

app.post('/api/persons', (req, res) => {
    const body = req.body
    Person.find({name: req.body.name}).then(aa => {
        if(aa.length === 0){
            const person = new Person({
                name: body.name,
                number: body.number
            })
            person.save().then(person => {
                Person.find({})
                    .then(persons => {
                        res.json(persons)
                    })
                    .catch(error => console.log('Person validation failed'))
            })
        } else {
            const clovek = aa[0]
            clovek.number = req.body.number
            clovek.save().then(aaa => {
                Person.find({}).then(persons => {
                    res.json(persons)
                })
            })
        }
    })
})

app.put('/api/persons/:id', (req, res) => {
    Person.find({name: req.body.name}).then(aa => {
        if(aa.length === 0){
            return
        }
        const clovek = aa[0]
        clovek.number = req.body.number
        clovek.save().then(aaa => {
            res.json(clovek)
        })
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

