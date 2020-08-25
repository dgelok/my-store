
export let addProduct = (product) =>{
    return {
        type: "ADD",
        product: product
    }
}

export let deleteProduct = (product) =>{
    return {
        type: "DELETE",
        product: product
    }
}

export let addStoreItems = (products) =>{
    return {
        type: "ADD_STORE_ITEMS",
        products: [...products]
    }
}