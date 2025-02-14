// for add item to cart

export const addCart = (product) => {
    return{
        type:"ADDITEM",
        payload : product
    }
}

// for delete item From cart
export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload : product
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    };
};