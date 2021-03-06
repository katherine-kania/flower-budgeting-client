import React, { useState, useEffect} from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { getAllOrders } from '../../api/Order'


const InquiryForm = (props) => {
    const {inquiry, user, handleChange, handleSubmit, heading, msgAlert} = props
    
    //// the flowers depend on the selection of colors
    const [orders, setOrders] = useState(null)
    
    /// call all orders
    useEffect(() => {
        getAllOrder(user)
            .then(res => {
                setOrders(res.data.orders)
            })
            
            .catch(() => {
                msgAlert({
                    heading: 'No orders?!!',
                    message: 'no orders found',
                    variant: 'danger',
                })
            })
    }, [])
    // console.log('the orders in inquiry form', orders)

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

    
    const colors = {
        black: flowers,
        nude: flowers,
        peach: flowers,
        pink: flowers,
        red: flowers,
        violet: flowers,
        white: flowers,
        yellow: flowers
        
    }
    // console.log("this is the colors", colors)
    
    const colorList = Object.keys(colors).map(key => ({
        name: key
    }))
  
    const handleColorSelect = (e) => {
        console.log('Selected Color', e.target.value)
        const colorSel = e.target.value
        const flowerSel = colorSel !== '' ? colors[colorSel] : ''
        const values = flowerSel.filter(flower => (flower.color == colorSel))
        console.log('filtered flowers', values)
        setSelectedColor(colorSel)
        setFilteredFlowers(values)
        setSelectedFlower('')
        handleChange(e)
        
    }
    
        
    const handleFlowerSelect = (e) => {
        console.log('Selected flowers', e.target.value)
        const flowerSel = e.target.value
        setSelectedFlower(flowerSel)
        handleChange(e)
    }
        
    
    return (
        <>
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>

                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    placeholder="First Name"
                    value={inquiry.first_name}
                    name='first_name'
                    onChange={handleChange}
                /> 

                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    placeholder="Last Name"
                    value={inquiry.last_name}
                    name='last_name'
                    onChange={handleChange}
                /> 

                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                    placeholder="Phone Number"
                    value={inquiry.phone_number}
                    name='last_name'
                    onChange={handleChange}
                />

                <Form.Label>Email</Form.Label>
                <Form.Control 
                    placeholder="Email"
                    value={inquiry.email}
                    name='email'
                    onChange={handleChange}
                />

                <Form.Label>Comment</Form.Label>
                <Form.Control 
                    placeholder="Comment"
                    value={inquiry.comment}
                    name='comment'
                    onChange={handleChange}
                />

                <Form.Label>Order Number</Form.Label>
                <Form.Control 
                    placeholder="Comment"
                    value={inquiry.comment}
                    name='comment'
                    onChange={handleChange}
                />

                <Form.Label>Estimate Price</Form.Label>
                <Form.Control 
                    value={inquiry.comment}
                    name='comment'
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
                type='number'
                value={selectedFlower}
                >
                <option value="">Select the flower</option>
                {filteredFlowers.map(flower=> (
                    <option value={flower.id}>
                    {flower.name}
                    </option>
                ))}
                </Form.Select>
                
                <Form.Label>Vase</Form.Label>
                <Form.Control 
                    placeholder="Vase preferences"
                    value={order.vase}
                    name='vase'
                    onChange={handleChange}
                />
              
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
        </>
    )
}

export default OrderForm