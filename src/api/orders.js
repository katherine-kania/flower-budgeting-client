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
        data: {
                name: newOrder.name,
                size: newOrder.size,
                price_range: newOrder.price_range,
                color: newOrder.color,
                vase: newOrder.vase,
                flower: newOrder.flower
        }
    })
}

// PATCH -> update function
export const updateOrder = (user, updatedOrder) => {
    console.log('user', user)
    console.log('this is newPet', updatedOrder)
    return axios({
        url:  apiUrl + `/orders/${updatedOrder.id}/`,
        method: 'PATCH',
        headers: {
            Authorization: `Token ${user.token}`
        },
        data: { 
            name: updatedOrder.name,
            size: updatedOrder.size,
            price_range: updatedOrder.price_range,
            color: updatedOrder.color,
            vase: updatedOrder.vase,
            flower: updatedOrder.flower
        }
    })
}

// DELETE -> remove function
export const removeOrder = (user, id) => {
    console.log('user', user)
    return axios({
        url:  apiUrl + `/orders/${id}/delete/`,
        method: 'DELETE',
        headers: {
            Authorization: `Token ${user.token}`
        }
    })
}