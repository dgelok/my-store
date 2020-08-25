import React, {useEffect, useState} from 'react'
import ProductCard from './ProductCard'
import {Row} from 'react-bootstrap'
const AddProduct = (props) => {
    

    return (
    <>
        <Row>
            {props.storeItems.map(item =>{
                return <ProductCard item={item}/>
            })}
        </Row>
    </>
  )
}

export default AddProduct
