import React from 'react'
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';
export default function CartTotals({ value, history }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart, myOrders, addToMyProducts } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button
                                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                onClick={() => clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">Subtotal:</span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Tax:</span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Total:</span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <h5>
                            <PayPalButton cartTotal={cartTotal} myOrders={myOrders} clearCart={clearCart} history={history} addToMyProducts={addToMyProducts} />
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
