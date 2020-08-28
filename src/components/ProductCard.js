import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { addProduct } from '../actions/cartActions'
import { useDispatch } from 'react-redux'

const ProductCard = (props) => {

    const dispatch = useDispatch()
    
    let handleSubmit = (e) => {
        
        e.preventDefault();
        
        let nextProduct = {
            id: props.item.id,
            productName: props.item.name,
            price: props.item.price,
            quantity: 1,
        };
        dispatch(addProduct(nextProduct))
    }
  return (
    <>
        <Card style={{ width: '18rem' }} className="m-2">
        <Card.Img variant="top" src={props.item.imageURL} />
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
                <Card.Subtitle>{props.item.price}</Card.Subtitle>
                <Card.Text>{props.item.description}</Card.Text>
                <Button variant="primary" onClick={handleSubmit}>Add to Cart</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default ProductCard
