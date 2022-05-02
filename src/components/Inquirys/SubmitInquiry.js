import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../api/inquirys'
import InquiryForm from '../shared/InquiryForm'

const CreateInquiry = (props) => {
    const {flower, user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()

    
    const [order, setOrder] = useState({})
    console.log('order in createOrder', order)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setOrder(prevOrder => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)

            const updatedValue = { [name]: name === 'flower' ? parseInt(value) : value }

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
                setOrder({})
                navigate(`/orders/${res.data.order.id}/`)
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

    return (
        <OrderForm 
            order={order}
            user={user}
            flower={flower}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Make a new order!"
        />
    )
}

export default CreateOrder