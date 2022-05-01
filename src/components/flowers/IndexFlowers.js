import React, { useState, useEffect } from 'react'
import { getAllFlowers } from '../../api/flowers'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const pageBackground = {
    backgroundColor: '#99a98f',
    opacity: '0.85',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    padding: '2em',
}

const pFont = {
    fontFamily: 'Poiret One',
    color: "white",
    float: 'center',
    fontSize: '1.em',
    fontWeight: 'bolder',
}


const IndexFlowers = (props) => {
    const [flowers, setFlowers] = useState(null)

    const {user, msgAlert} = props
    // console.log('user in index flowers',user)
    // console.log('flowers in index flowers',flowers)
    useEffect(() => {
        getAllFlowers(user)
            .then(res => {
                setFlowers(res.data.flowers)
            })
            
            .catch(() => {
                msgAlert({
                    heading: 'No flowers?!!',
                    message: 'no flowers found',
                    variant: 'danger',
                })
            })
    }, [])

    if (!flowers) {
        return <p>loading...</p>
    } else if (flowers.length === 0) {
        return <p>no flowers yet</p>
    }

    let flowerCards

    if (flowers.length > 0) {
        flowerCards = flowers.map(flower => (
            <div >
                <div key={flower.id} className="m-2">
                    <div>
                        <div>
                        <Link to={`/flowers/${flower.id}`}>
                            <Card.Img style={{ 
                                width: '200px', 
                                height: '200px',
                                backgroundSize: 'contain',
		                        backgroundRepeat: 'no-repeat',
                                borderRadius: '100%',
                                border: 'thin solid grey'
                                }}variant="top" src={`${flower.img}`} />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
        
    }

    return (
        <>
            <div style={pageBackground}>
                <p style={pFont}>
                    <strong>Click on a flower to learn more about it!</strong>
                </p>
                <div style={pageBackground}>
                    {flowerCards}
                </div>
            </div>
        </>
    )
}

export default IndexFlowers