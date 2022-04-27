import apiUrl from '../apiConfig'
import axios from 'axios'


// index function
export const getAllFlowers = (user) => {
    // console.log('this is the user:', user)
    return axios({
        url: apiUrl + `/flowers/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show function
export const getOneFlower = (id, user) => {
    return axios({
        url: apiUrl + `/flowers/${id}/`,
        method: 'SHOW',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}