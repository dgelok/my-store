const initialState = {
    totalCost: 0,
    storeItems: [],
    cart: []
}

const cartReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                cart: state.cart.concat(action.product),
                totalCost: parseFloat((parseFloat(state.totalCost + parseFloat(action.product.price))).toFixed(2))
            }

        case "DELETE": 
            let newCart = state.cart.filter(n=>{
                return n.id !== action.product.id
            })
            return {
                ...state,
                cart: newCart
            };
            
        case "ADD_STORE_ITEMS":
            return {
                ...state,
                storeItems: action.products
            }
        default:
            return state;
    }
}

export default cartReducer