import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.handleCart);
    const dispatch = useDispatch();

    const handleIncrease = (item) => {
        dispatch(addCart(item));
    };

    const handleDecrease = (item) => {
        dispatch(delCart(item));
    };

    const handleRemove = (item) => {
        while (item.qty > 0) {
            dispatch(delCart(item));
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

    return (
        <div className="container my-5">
            <h2 className="text-center">Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <h4>Your Cart is Empty!</h4>
                    <NavLink to="/products" className="btn btn-primary">Continue Shopping</NavLink>
                </div>
            ) : (
                <div className="row">
                    <div className="col-md-8">
                        {cartItems.map((item) => (
                            <div className="card mb-3" key={item.id}>
                                <div className="row g-0">
                                    <div className="col-md-4 text-center">
                                        <img src={item.image} alt={item.title} className="img-fluid" style={{ maxHeight: "150px" }}/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">Price: Rs. {item.price}</p>
                                            <p className="card-text">Quantity: {item.qty}</p>
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-outline-primary me-2" onClick={() => handleIncrease(item)}>+</button>
                                                <button className="btn btn-outline-danger me-2" onClick={() => handleDecrease(item)}>-</button>
                                                <button className="btn btn-danger" onClick={() => handleRemove(item)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3">
                            <h4>Total Price: Rs. {totalPrice.toFixed(2)}</h4>
                            <button className="btn btn-success w-100">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

