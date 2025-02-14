import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/action";

const Checkout = () => {
    const cart = useSelector((state) => state.handleCart); // Fetch cart from Redux
    const dispatch = useDispatch()
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

    // Handle place order
    const handlePlaceOrder = () => {
        alert("Your order has been placed successfully! 🎉");
        navigate("/"); // Redirect to home page after order
        dispatch(clearCart());

    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Checkout</h2>
            {cart.length === 0 ? (
                <h4 className="text-center text-muted">Your cart is empty.</h4>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.qty}</td>
                                    <td>${(item.price * item.qty).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h4 className="text-end">Total: ${totalPrice.toFixed(2)}</h4>
                    <button className="btn btn-primary w-100 mt-3" onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default Checkout;
