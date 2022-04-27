import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'


const OrderForm = (props) => {
    
    const {order, handleChange, handleSubmit, heading} = props
    const [ priceRange, setPriceRange ] = useState([])
    const [ selectedSize, setSelectedSize ] = useState('')
    const [ selectedPrice, setSelectedPrice ] = useState('')

    const sizes = {
        small: ['$35-55', '$55-75'],
        medium: ['$75-95', '$95-115'],
        large: ['$115-145', '145-185'],
        xlarge: ['$200-255', '255-300']
    }

    const sizeList = Object.keys(sizes).map(key => ({
        name: key
    }))

    const handleSizeSelect = (e) => {
        console.log('Selected Size', e.target.value)
        const sizeSel = e.target.value
        const priceSel = sizeSel !== '' ? sizes[sizeSel] : ''
        setSelectedSize(sizeSel)
        setPriceRange(priceSel)
        setSelectedPrice('')
        handleChange(e)
    }

    const handlePriceSelect = (e) => {
        console.log('Selected Price range', e.target.value)
        const priceSel = e.target.value
        setSelectedPrice(priceSel)
        handleChange(e)
    }
    
    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>

                <Form.Label>Order Name</Form.Label>
                <Form.Control 
                    placeholder="Name your order"
                    value={order.name}
                    name='name'
                    onChange={handleChange}
                /> 

                <Form.Label>Select a Size</Form.Label>
                <Form.Select
                name="size"
                
                onChange={e => handleSizeSelect(e)}
                value={selectedSize}
                >
                <option value="">Select the size</option>
                {sizeList.map((size, key) => (
                    <option key={key} value={size.name}>
                    {size.name}
                    </option>
                ))}
                </Form.Select>

                <Form.Label>Select a Price Range</Form.Label>    
                <Form.Select
                name="price_range"
                onChange={e => handlePriceSelect(e)}
                value={selectedPrice}
                >
                    <option value="">Select the price range</option>
                    {priceRange.map((price, key) => (
                        <option key={key} value={price}>
                        {price}
                        </option>
                    ))}
                </Form.Select>


                {/* <Form.Group controlId='size'>
                    <Form.Label>Arrangement Size</Form.Label>
                    <Form.Select name="size" onChange={handleChange} aria-label="Select Size">
                        <option>Select a size</option>
                        <option value={order.type}>small</option>
                        <option value={order.type}>medium</option>
                        <option value={order.type}>large</option>
                        <option value={order.type}>other</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId='price_range'>
                    <Form.Label>Price Range</Form.Label>
                    <Form.Select name="price_range" onChange={handleChange} aria-label="Select a price">
                        <option>Select a price range</option>
                        { order.type = small && 
                        <option value={order.price_range}>$30-40</option>
                        
                        }
                        <option value={order.price_range}>medium</option>
                        <option value={order.price_range}>large</option>
                        <option value={order.price_range}>other</option>
                    </Form.Select>
                </Form.Group> */}

                <Form.Label>Color</Form.Label>
                <Form.Control 
                    placeholder="Select your color preference"
                    value={order.color}
                    name='color'
                    onChange={handleChange}
                />

                <Form.Label>Flowers</Form.Label>
                <Form.Control 
                    placeholder="Flower preferences"
                    value={order.flower}
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