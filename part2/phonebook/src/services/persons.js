import axios from "axios";

const getPersonServer = () =>{
    return axios.get('http://localhost:3001/persons')
}

const addPersonServer = (person) =>{
    return axios
        .post('http://localhost:3001/persons', person)
}

export default {
    getPersonServer: getPersonServer,
    addPersonServer: addPersonServer
}


