const initialState = {
    totalCost: 0,
    storeItems: [],
    cart: []
}

const cartReducer = (state, action) =>{
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                cart: state.cart.concat(action.product)
            }
        case "DELETE": 
            let newCart = state.cart.filter(n=>{
                return n.id !== action.product.id
            })
            return {
                ...state,
                cart: newCart
            };
        default:
            return state;
    }
}

export default cartReducer