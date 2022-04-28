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
                // id: newOrder.id,
                name: newOrder.name,
                size: newOrder.size,
                price_range: newOrder.price_range,
                color: newOrder.color,
                vase: newOrder.vase,
                flower: newOrder.flower,
                // owner: user.id
        }
    })
}

// PATCH -> update function
export const updateOrder = (user, updatedOrder) => {
    console.log('user', user)
    console.log('this is newPet', updatedOrder)
    return axios({
        url: `${apiUrl}/orders/${updatedOrder.id}`,
        method: 'PATCH',
        headers: {
            Authorization:  `Token ${user.token}`
        },
        data: { pet: updatedPet }
    })
}

// DELETE -> remove function
export const removePet = (user, petId) => {
    console.log('user', user)
    return axios({
        url: `${apiUrl}/pets/${petId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}