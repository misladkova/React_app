const mongoose = require('mongoose')

if(process.argv.length<5){
    console.log('Please provide all arguments: node mongo.js <password> <name> <number>')
    process.exit(1)
}

const password = process.argv[2]
const personName = process.argv[3]
const personNumber = process.argv[4]
const url = `mongodb+srv://mislad:${password}@cluster0.b2qrq.mongodb.net/db?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
    useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: `${personName}`,
    number: `${personNumber}`
})

person.save().then(result => {
    console.log(`added ${personName} number ${personNumber} to phonebook`)
    mongoose.connection.close()
})
