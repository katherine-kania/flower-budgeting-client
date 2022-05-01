import React, { useState, useEffect } from 'react'
import { getAllOrders } from '../../api/orders'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const pageBackground = {
    backgroundColor: '#99a98f',
    opacity: '0.85',
    margin: '20px',
    display: 'flex',
}

const alignText = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    padding: '2em',
}

const pFont = {
    fontFamily: 'Poiret One',
    color: "white",
    float: 'center',
    fontSize: '1.3em',
    fontWeight: 'bolder',
    textDecoration: 'none',
    textTransform: 'capitalize',
}

const circle = {
    width: '200px', 
    height: '200px',
    borderRadius: '100%',
    border: 'thin solid grey',
    backgroundColor: 'rgb(196, 98, 105)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
            <div style={circle} key={order.id} className="m-4">
 
                 <Link style={pFont} to={`/orders/${order.id}`}>Order {order.name}</Link>

            </div>
        ))
    }

    return (
        <>
        <div style={pageBackground}>

                <div style={alignText}>
                    <p style={pFont}>
                        <strong>My Saved Orders</strong>
                    </p>
                </div>
                <div >
            <div>
                    <div style={pageBackground} >
                        {orderCards}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default IndexOrders