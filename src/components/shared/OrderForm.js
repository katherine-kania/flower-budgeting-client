import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const OrderForm = (props) => {
    
    const {order, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="Name your order"
                    value={order.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Size</Form.Label>
                <Form.Control 
                    placeholder="Size preference"
                    value={order.size}
                    name='size'
                    onChange={handleChange}
                />
                <Form.Label>Price Range</Form.Label>
                <Form.Control 
                    placeholder="Your price range"
                    value={order.price_range}
                    name='price_range'
                    onChange={handleChange}
                />
                <Form.Label>Color</Form.Label>
                <Form.Control 
                    placeholder="Color preference"
                    value={order.price_range}
                    name='price_range'
                    onChange={handleChange}
                />
                <Form.Label>Flowers</Form.Label>
                <Form.Control 
                    placeholder="Flower preferences"
                    value={order.price_range}
                    name='flower'
                    onChange={handleChange}
                />
                <Form.Label>Vase</Form.Label>
                <Form.Control 
                    placeholder="Vase preferences"
                    value={order.vasee}
                    name='vase'
                    onChange={handleChange}
                />
              
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default OrderForm