import React, { useState, useEffect } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../api/orders'
import OrderForm from './OrderForm'
import { getAllFlowers } from '../../api/flowers'

const CreateOrder = (props) => {
    const {user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()
    
    const [order, setOrder] = useState({
        name: '', 
        size: '', 
        price_range: '', 
        color: '',
        flower: '',
        vase: ''
    })
    console.log('order in createOrder', order)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setOrder(prevOrder => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)

            const updatedValue = { [name]: value }

            console.log('prevOrder', prevOrder)
            console.log('updatedValue', updatedValue)

            return {...prevOrder, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createOrder(user, order)
            // if create is successful, we should navigate to the show page
            .then(res => {
                console.log('this is the create order id', res.data.order.id )
                navigate(`/orders/${res.data.order.id}`)
            })

            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'create order failed',
                    variant: 'danger',
                }))
        console.log('this is the order', order)
    }

    //// the flowers depend on the selection of colors
    const [flowers, setFlowers] = useState(null)
    
    /// call all flowers
    useEffect(() => {
        getAllFlowers(user)
            .then(res => {
                setFlowers(res.data.flowers)
            })
            
            .catch(() => {
                msgAlert({
                    heading: 'No flowers?!!',
                    message: 'no flowers found',
                    variant: 'danger',
                })
            })
    }, [])
    console.log('the flowers in order form', flowers)

    return (
        <OrderForm 
            order={order}
            user={user}
            flowers={flowers}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Make a new order!"
        />
    )
}

export default CreateOrder