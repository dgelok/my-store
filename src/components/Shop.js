import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import AddProduct from './AddProduct'
import CurrentProducts from './CurrentProducts'
import {data} from '../utils/data.js'
import {addStoreItems} from "../actions/cartActions"
import {Container, Row} from 'react-bootstrap'


const Shop = () => {

    // const cartContents = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const totalCost = useSelector(state => state.totalCost)
    const storeItems = useSelector(state => state.storeItems)
    const currentCart = useSelector(state => state.cart)
    const [isLoaded, updateIsLoaded] = useState(false);
    
    // console.log(products)
    

    useEffect(()=>{
        let products = data.products;
        
        dispatch(addStoreItems(products))
        updateIsLoaded(true)
        // console.log(storeItems)
    }, [])

    if (isLoaded === false) {
        return (<div>...loading...</div>)
    } else {
        return (
            <>
            <Container>
                <Row className="justify-content-between m-2 align-items-center">
                    <h1>Shopping Cart</h1><h3>Total Cost: {totalCost}</h3>
                </Row>
                <Row className="m-2">
                    <h3>Current Items in Cart: {currentCart.length}</h3>
                </Row>
                <Row className="m-2">
                    <CurrentProducts currentCart={currentCart}/>
                </Row>
                <br />
                <br />
                <AddProduct storeItems={storeItems}/>
            </Container>
            </>
        )
    }
}

export default Shop
