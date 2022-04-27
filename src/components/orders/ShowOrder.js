import React, {useState, useEffect} from 'react'
import { getOneOrder} from '../../api/orders'
import { useParams } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowOrder = (props) => {

    const [order, setOrder] = useState(null)
    const {user, msgAlert} = props
    const { id } = useParams()
    console.log('id in showOrder', id)
    console.log('user in showOrder', user)
    
    useEffect(() => {
        getOneOrder(id, user)
            .then(res => {
                console.log('order in showOrder', res.data.order)
                setOrder(res.data.order)
            })
        
            .catch(() => {
                msgAlert({
                    heading: 'No Order found',
                    message: 'Order missing',
                    variant: 'danger',
                })
            })
    }, [])

    if (!order) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{order.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Color: {order.color}</small><br/>
                            <small>Price Range: ${order.price_range}</small><br/>
                            {/* <Card.Img variant="top" src={`${Order.img}`} /> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

export default ShowOrder