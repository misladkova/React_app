import axios from 'axios'
const url = '/api/blogs'

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = async newObj => {
    const config = {
        headers: {Authorization: token},
    }
    const res = await axios.post(url, newObj, config)
    return res.data
}

export default {setToken, getAll, create}