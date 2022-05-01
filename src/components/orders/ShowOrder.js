import React, {useState, useEffect} from 'react'
import { getOneOrder, removeOrder, updateOrder} from '../../api/orders'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinner, Container, Card, Button, Image } from 'react-bootstrap'
import EditOrderModal from './EditOrderModal'
import { getOneFlower} from '../../api/flowers'

const pageBackground = {
    backgroundColor: '#99a98f',
    opacity: '0.85',
    margin: '20px',
    display: 'flex',
    alignContent: 'center',
    flexFlow: 'column wrap',
    padding: '2em',
}

const pFont = {
    fontFamily: 'Poiret One',
    color: "white",
    float: 'center',
    fontSize: '1.3em',
    fontWeight: 'bolder',
    textTransform: 'capitalize'
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

    //// the flowers depend on the selection of colors
    // const [flower, setFlower] = useState(null)
    // const flowerId = order.flower
    // /// call all flowers
    // useEffect(() => {
    //     getOneFlower(flowerId, user)
    //         .then(res => {
    //             setFlower(res.data)
    //         })
            
    //         .catch(() => {
    //             msgAlert({
    //                 heading: 'No flowers?!!',
    //                 message: 'no flowers found',
    //                 variant: 'danger',
    //             })
    //         })
    // }, [])
    // console.log('the flowers in order form', flower)

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
            <Container >
                <div style={pageBackground}>
                    <h2 style={pFont}>{order.name}</h2>
                    <div>
                        <div  style={pFont}>
                            <small>Size: {order.size}</small><br/>
                            <small>Price Range: ${order.price_range}</small><br/>
                            <small>Color: {order.color}</small><br/>
                            <small>Flower: {order.flower}</small><br/>
                            <small>Vase: {order.vase}</small><br/>
                            {/* <Image src={flower.img} rounded/> */}
                            {/* <Card.Img variant="top" src={`${order.img}`} /> */}
                        </div>
                    </div>
                    <div>
                        <Button onClick={() => setModalOpen(true)} className="m-2">
                            Edit Order
                        </Button>
                        <Button onClick={() => removeTheOrder()}className="m-2">
                            Delete Order
                        </Button>
                        <Button className="m-2">
                            Next
                        </Button>
                    </div>
                </div>
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