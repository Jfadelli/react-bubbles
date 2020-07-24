import axios from 'axios'

const url = 'http://localhost:5000/api'

export default function axiosWithAuth() {
    const token = JSON.parse(localStorage.getItem('token'))

    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: url,
    })
}