import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { submitInquiry } from '../../api/inquirys'
import InquiryForm from '../shared/InquiryForm'

const SubmitInquiry = (props) => {
    const {user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()

    const [inquiry, setInquiry] = useState({})
    console.log('order in createOrder', inquiry)

    const handleChange = (e) => {
        // e === event
        e.persist()

        setInquiry(prevInquiry => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            console.log('this is e.target checked', e.target.checked)

            const updatedValue = { [name]: name === 'order' ? parseInt(value) : value }

            console.log('prevOrder', prevOrder)
            console.log('updatedValue', updatedValue)

            return {...prevOrder, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        submitInquiry(user, inquiry)
            // if create is successful, we should navigate to the show page
            .then(res => {
                console.log('this is the create order id', res.data.order.id )
                setOrder({})
                navigate(`/orders/inquiry/${res.data.inquiry.id}/`)
            })

            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'submit failed',
                    variant: 'danger',
                }))
        console.log('this is the order', order)
    }

    return (
        <InquiryForm 
            inquiry={inquiry}
            user={user}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Submit to the florist!"
        />
    )
}

export default SubmitInquiry