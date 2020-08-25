import React from 'react'
import {Card, Button} from 'react-bootstrap'
const ProductCard = (props) => {
  return (
    <>
        <Card style={{ width: '18rem' }} className="m-2">
        <Card.Img variant="top" src={props.item.imageURL} />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Subtitle>{props.item.price}</Card.Subtitle>
                <Card.Text>{props.item.description}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default ProductCard
