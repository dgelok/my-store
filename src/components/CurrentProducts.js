import React from 'react'
import DeleteItem from './DeleteItem'

const CurrentProducts = ({ currentCart }) => {
    
    if (currentCart == undefined || currentCart.length == 0) {
        return "Your cart is empty!"
    }
    else {
        let results = currentCart.map(item =>{
            return <li>{item.productName} - {item.price} <DeleteItem product={item}/></li>
        })
        return (
            <>
            <ul>
                {results}
            </ul>
            </>
        )
    }
}

export default CurrentProducts
