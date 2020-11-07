import axios from "axios";

const getPersonServer = () =>{
    return axios.get('http://localhost:3001/persons')
}

const addPersonServer = (person) =>{
    return axios
        .post('http://localhost:3001/persons', person)
}

const removePersonServer = (id) =>{
    return axios.delete(`http://localhost:3001/persons/${id}`)
}

const changeNumberServer = () =>{
    return axios.put()
}

export default {
    getPersonServer: getPersonServer,
    addPersonServer: addPersonServer,
    removePersonServer: removePersonServer,
    changeNumberServer: changeNumberServer
}


