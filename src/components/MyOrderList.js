import React from 'react'
import CartItem from './Cart/CartItem';
import MyOrderItem from './MyOrderItem';
function MyOrderList({ value }) {
    const { myOrders } = value
    return (
        <div className="container-fluid">
            {
                myOrders.map((item) => {
                    return <MyOrderItem key={item.id} item={item} value={value} />
                })

            }
        </div>
    )
}

export default MyOrderList
