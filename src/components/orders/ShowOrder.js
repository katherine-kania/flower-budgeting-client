import React, {useState, useEffect} from 'react'
import { getOneOrder, removeOrder, updateOrder} from '../../api/orders'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import EditOrderModal from './EditOrderModal'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowOrder = (props) => {

    const [order, setOrder] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert} = props
    const { id } = useParams()
    console.log('id in showOrder', id)
    console.log('user in showOrder', user)
    const navigate = useNavigate()
    
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
    }, [updated])

    if (!order) {
        return (
            <Container fluid className="justify-content-center">
                <Spinner animation="border" role="status" variant="warning" >
                    <span className="visually-hidden">Loading....</span>
                </Spinner>
            </Container>
        )
    }

    /// DELETES the order
    const removeTheOrder = () => {
        removeOrder(user, order.id)
            // .then(() => {
            //     msgAlert({
            //         heading: 'Your custom order has been deleted.',
            //         message: 'Please, go to CREATE ORDERS to make a new one!',
            //         variant: 'success',
            //     })
            // })
            .then(() => { navigate(`/orders/`)})
            .catch(() => {
                msgAlert({
                    heading: 'something went wrong',
                    message: 'that aint it',
                    variant: 'danger',
                })
            })
    }

    return (
        <>
            <Container className="fluid">
                <Card>
                    <Card.Header>{order.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Color: {order.color}</small><br/>
                            <small>Price Range: {order.price_range}</small><br/>
                            {/* <Card.Img variant="top" src={`${Order.img}`} /> */}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Order
                        </Button>
                        <Button onClick={() => removeTheOrder()}className="m-2" variant="danger">
                            Delete Order
                        </Button>
                    </Card.Footer>
                </Card>
            </Container>
            <EditOrderModal 
                order={order}
                show={modalOpen}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateOrder={updateOrder}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}

export default ShowOrder