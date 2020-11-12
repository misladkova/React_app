import axios from "axios";
const baseUrl = 'http://localhost:3001/api/persons'
// const baseUrl = 'https://aqueous-forest-70534.herokuapp.com/api/persons'

const getPersonServer = () =>{
    return axios.get(baseUrl)
}

const addPersonServer = (person) =>{
    return axios
        .post(baseUrl, person)
}

const removePersonServer = (id) =>{
    const url = `${baseUrl}/${id}`
    return axios.delete(url)
}

const changeNumberServer = (id, changedPerson) =>{
    console.log("aaaa", id, changedPerson)
    const url = `${baseUrl}/${id}`
    return axios.put(url, changedPerson)
}

export default {
    getPersonServer,
    addPersonServer,
    removePersonServer,
    changeNumberServer
}


