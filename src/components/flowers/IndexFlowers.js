import React, { useState, useEffect } from 'react'
import { getAllFlowers } from '../../api/flowers'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    opacity: '0.7',
    position: 'absolute',
    borderRadius: '100%',
    color: '#5c82a6',
	fontFamily: 'Quattrocento',
	fontWeight: 'bolder',
}

const greenCircle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    height:'40vh',
    width:'40vh',
    borderRadius: '100%',
    opacity: '0.9',
    marginLeft: '100px',
    zIndex: '-1',
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
            <div style={greenCircle}>
                <div key={flower.id} style={{ width: '20%'}} className="m-4">
                    <div>
                        <div>
                            <Card.Img style={{ 
                                width: '250px', 
                                height: '250px',
                                backgroundSize: 'contain',
		                        backgroundRepeat: 'no-repeat'
                            }}variant="top" src={`${flower.img}`} />
                            <Link to={`/flowers/${flower.id}`}>{flower.name}</Link>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <>
            <h3>The flower dictionary</h3>
                <div style={cardContainerLayout}>
                    {flowerCards}
                </div>
        </>
    )
}

export default IndexFlowers