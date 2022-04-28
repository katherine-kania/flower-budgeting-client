import React, { useState, useEffect } from 'react'
import { Form, Container, Button } from 'react-bootstrap'


const OrderForm = (props) => {
    const {order, user, flowers, handleChange, handleSubmit, heading, msgAlert} = props
    
    ///// The price ranges depend on the size selected from an array
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

    //// the flowers depend on the selection of colors
    const [ filteredFlowers, setFilteredFlowers] = useState([])
    const [ selectedColor, setSelectedColor ] = useState('')
    const [ selectedFlower, setSelectedFlower ] = useState('')
    
    
    console.log('the flowers in order form', flowers)

    const colors = {
        black: [flowers],
        nude: [],
        peach: [],
        pink: [],
        red: [],
        violet: [],
        white: [],
        yellow: []
        
    }
    console.log("this is the colors", colors)
    
    const colorList = Object.keys(colors).map(key => ({
        name: key
    }))
    
    // const asArray = Object.entries(flowers)
    // const filtered = asArray.filter(([key, value]) => typeof value === 'black')
    // const justStrings = Object.fromEntries(filtered)
    // console.log('these are the black flowers', justStrings)
    // = Object.keys(flowers).map(key => ({
        
        //         name: key
        
        // }))
        
    const handleColorSelect = (e) => {
        console.log('Selected Color', e.target.value)
        const colorSel = e.target.value
        const flowerSel = colorSel !== '' ? colors[colorSel] : ''
        setSelectedColor(colorSel)
        setFilteredFlowers(flowerSel)
        setSelectedFlower('')
        handleChange(e)
    }
        
    let flowerList = flowers.map((flower) => {
        return flower.name
    })

    const handleFlowerSelect = (e) => {
        console.log('Selected flowers', e.target.value)
        const flowerSel = e.target.value
        setSelectedFlower(flowerSel)
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

                <Form.Label>Select a Color</Form.Label>
                <Form.Select
                name="color"
                onChange={e => handleColorSelect(e)}
                value={selectedColor}
                >
                <option value="">Select the color</option>
                {colorList.map((color, key) => (
                    <option key={key} value={color.name}>
                    {color.name}
                    </option>
                ))}
                </Form.Select>

                <Form.Label>Select a flower</Form.Label>
                <Form.Select
                name="flower"
                onChange={e => handleFlowerSelect(e)}
                value={selectedFlower}
                >
                <option value="">Select the flower</option>
                {flowerList.map(flower=> (
                    <option value={flower}>
                    {flower}
                    </option>
                ))}
                </Form.Select>

                {/* <Form.Label>Select a flower type</Form.Label>    
                <div>
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            name="flower"
                            onChange={e => handleFlowerSelect(e)}
                            value={selectedFlower}
                        />

                        </div>
                    ))}
                    <option value="">Select the flower</option>
                    {filteredFlowers.map((flower, key) => (
                        <option key={key} value={flower}>
                        {flower.id}
                        </option>
                    ))}

                </div> */}




                {/* <Form.Label>Color</Form.Label>
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
                /> */}
                
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