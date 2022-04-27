import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllOrders = (user) => {
    // console.log('this is the user:', user)
    return axios({
        url: apiUrl + `/orders/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// show function
export const getOneOrder = (id, user) => {
    return axios({
        url: apiUrl + `/orders/${id}/`,
        method: 'GET',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}

// POST -> create function
export const createOrder = (user, newOrder) => {
    console.log('user', user)
    console.log('this is newOrder', newOrder)
    return axios({
        url: apiUrl + `/orders/create/`,
        method: 'POST',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { order: newOrder }
    })
}