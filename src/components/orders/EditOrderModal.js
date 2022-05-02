import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import EditForm from '../shared/EditForm'

const EditOrderModal = (props) => {
    const { order, user, show, handleClose, updateOrder, msgAlert, triggerRefresh } = props
    const [editOrder, setEditOrder] = useState(props.order)
    const{ id } = order

    const handleChange = (e) => {
        // e === event
        e.persist()

        setEditOrder(prevOrder => {
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


        console.log('the order to submit', order)
        updateOrder(user, editOrder, id)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: 'that aint it',
                    variant: 'danger',
                }))
        console.log('this is the order', order)
    }
    

    return (
        <Modal show={show} onHide={handleClose}>
            <div style = {{width: '100%', backgroundColor: 'rgb(196, 98, 105)'}}>
                <EditForm 
                    order={order}
                    user={user}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit your order!"
                />
            </div>
        </Modal>
    )
}
    
export default EditOrderModal