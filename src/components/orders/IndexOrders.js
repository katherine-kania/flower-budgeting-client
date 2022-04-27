import React, { useState, useEffect } from 'react'
import { getAllOrders } from '../../api/orders'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexOrders = (props) => {
    const [orders, setOrders] = useState(null)
    const {user, msgAlert} = props
    // console.log('user in index orders',user)
    // console.log('orders in index orders',orders)
    useEffect(() => {
        getAllOrders(user)
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

    if (!orders) {
        return <p>loading...</p>
    } else if (orders.length === 0) {
        return <p>no orders yet</p>
    }

    let orderCards

    if (orders.length > 0) {
        orderCards = orders.map(order => (
            <Card key={order.id} style={{ width: '20%' }} className="m-4">
                <Card.Header>{order.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {/* <Card.Img variant="top" src={`${order.img}`} /> */}
                        <Link to={`/orders/${order.id}`}>View {order.name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <>
            <h3>My orders</h3>
            <div style={cardContainerLayout}>
                {orderCards}
            </div>
        </>
    )
}

export default IndexOrders