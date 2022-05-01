import React, {useState, useEffect} from 'react'
import { getOneFlower} from '../../api/flowers'
import { useParams } from 'react-router-dom'
import { Spinner, Container, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


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
    fontSize: '1.4em',
    fontWeight: 'bolder',
    textTransform: 'capitalize'
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
            <Container>
                <div style={pageBackground}>
                    <h2 style={pFont}>{flower.name}</h2>
                    <div>
                        <div style={pFont}>
                            <small>Color: {flower.color}</small><br/>
                            <small>Estimated price per stem: ${flower.price_stem}</small><br/>
                            <Card.Img style={{ 
                                width: '400px', 
                                height: '400px',
                                backgroundSize: 'contain',
		                        backgroundRepeat: 'no-repeat'
                            }} variant="top" src={`${flower.img}`} />
                        </div>
                    </div>
                <div>
                    <Link to="/flowers/" className="btn btn-primary">
                        Back to all flowers
                    </Link>
                </div>
                </div>
            </Container>
        </>
    )
}

export default ShowFlower