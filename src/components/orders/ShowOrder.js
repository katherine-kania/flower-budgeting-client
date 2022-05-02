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
    const [flower, setFlower] = useState({})
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
                
                getOneFlower(res.data.order.flower, user)
                .then(res => {
                console.log('flower in showFlower', res.data.flower)
                setFlower(res.data.flower)
                })
            })

            
            .catch(() => {
                msgAlert({
                    heading: 'No Order found',
                    message: 'Order missing',
                    variant: 'danger',
                })
        })

    }, [updated])
    
    console.log('flower in showFlower', flower)
    console.log(' this is the order in showOrder', order)
    
    // const flowerId = {
    //     flowerId: order.flower 
    // }
    
    // useEffect(() => {
    //         getOneFlower(flowerId, user)
    //         .then(res => {
    //             console.log('flower in showFlower', res.data.flower)
    //             setFlower({flower: res.data.flower})
    //             console.log('flower in showFlower', flower)
    //         })
    //         .catch(() => {
    //             msgAlert({
    //                 heading: 'No flower found',
    //                 message: 'flower missing',
    //                 variant: 'danger',
    //             })
    //         })
    
    //     }, [])
    
    // console.log('flower in showOrder', flower)
    
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
                            <small>Price Range: {order.price_range}</small><br/>
                            <small>Color: {order.color}</small><br/>
                            <small>Vase: {order.vase}</small><br/>
                            <small>Flower: {flower.name}</small><br/>
                            <Card.Img style={{ 
                                width: '300px', 
                                height: '300px',
                                objectFit: 'fill'
                            }} variant="top" src={`${flower.img}`} />
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