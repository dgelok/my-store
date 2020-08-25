import React from 'react'
import {deleteProduct} from '../actions/cartActions';
import {useDispatch} from 'react-redux';

const DeleteItem = (props) => {

    let dispatch = useDispatch();
    let handleClick = () =>{

        dispatch(deleteProduct(props.product))
    }
  return (
    <>
      <button onClick={handleClick}>X</button>
    </>
  )
}

export default DeleteItem
