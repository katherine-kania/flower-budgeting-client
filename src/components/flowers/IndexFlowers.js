import React, { useState, useEffect } from 'react'
import { getAllFlowers } from '../../api/flowers'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexFlowers = (props) => {
    const [flowers, setFlowers] = useState(null)

    const {user, msgAlert} = props
    console.log('user in index flowers',user)
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
            <Card key={flower.id} style={{ width: '20%' }} className="m-4">
                <Card.Header>{flower.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Card.Img variant="top" src={`${flower.img}`} />
                        <Link to={`/flowers/${flower.id}`}>View {flower.name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
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