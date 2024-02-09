import axios from "axios"

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily"

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getHistory(token) {
    const promise = axios.get(BASE_URL, createConfig(token))
    return promise
}

const apiHistory = { getHistory }
export default apiHistory