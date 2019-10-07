import React, { Component } from 'react'
import Title from './Title';
import CartColumns from './Cart/CartColumns';
import { ProductConsumer } from '../Context';
import EmptyCart from './Cart/EmptyCart';
import MyOrderList from './MyOrderList';
class MyOrders extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { myOrders } = value;
                    if (myOrders.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name="My" title="Orders" />
                                <div className="container-fluid text-center d-none d-lg-block">
                                    <div className="row">
                                        <div className="col-10 mx-auto col-lg-2">
                                            <p className="text-uppercase">products</p>
                                        </div>
                                        <div className="col-10 mx-auto col-lg-2">
                                            <p className="text-uppercase">name of product</p>
                                        </div>
                                        <div className="col-10 mx-auto col-lg-2">
                                            <p className="text-uppercase">price</p>
                                        </div>
                                        <div className="col-10 mx-auto col-lg-2">
                                            <p className="text-uppercase">total</p>
                                        </div>
                                    </div>
                                </div>
                                <MyOrderList value={value} />
                            </React.Fragment>
                        )
                    } else {
                        return <EmptyCart message="No Orders Found." />
                    }
                }}
            </ProductConsumer>
        )
    }
}

export default MyOrders
