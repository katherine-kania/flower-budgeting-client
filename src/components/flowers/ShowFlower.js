import React, {useState, useEffect} from 'react'
import { getOneFlower} from '../../api/flowers'
import { useParams } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowFlower = (props) => {

    const [flower, setFlower] = useState(null)
    const {user, msgAlert} = props
    const { id } = useParams()
    console.log('id in showFlower', id)
    console.log('user in showFlower', user)
    
    useEffect(() => {
        getOneFlower(id, user)
            .then(res => {
                console.log('flower in showFlower', res.data.flower)
                setFlower(res.data.flower)
            })
        
            .catch(() => {
                msgAlert({
                    heading: 'No flower found',
                    message: 'flower missing',
                    variant: 'danger',
                })
            })
    }, [])

    if (!flower) {
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
                    <Card.Header>{flower.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>Color: {flower.color}</small><br/>
                            <small>Estimated price per stem: ${flower.price_stem}</small><br/>
                            <Card.Img variant="top" src={`${flower.img}`} />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

export default ShowFlower