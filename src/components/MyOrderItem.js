import React from 'react'

export default function MyOrderItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="product" className="img-fluid" style={{ width: "5rem", height: "5rem", }} />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: $ {total}</strong>
            </div>
        </div>
    )
}
