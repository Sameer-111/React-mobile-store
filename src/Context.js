import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        myOrders: [],
        tempMyOrders: []
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id == id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        const price = product.price;
        product.total = price;
        product.count = 1;
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product], tempMyOrders: [...this.state.tempMyOrders, product] }
        }, () => {
            this.addTotals();
        })
    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        });
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    }

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getItem(id));
        const product = tempCart[index];
        product.count++;
        product.total = product.count * product.price;

        this.setState(() => {
            return { cart: [...tempCart] }
        }, () => {
            this.addTotals();
        });
    }

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getItem(id));
        const product = tempCart[index];
        product.count--;
        if (product.count === 0) {
            console.log(product.count)
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return { cart: [...tempCart] }
            }, () => {
                this.addTotals();
            });
        }
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getItem(id));
        tempCart.splice(index, 1);
        const productIndex = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[productIndex];
        product.inCart = false;
        product.count = 0;
        product.total = 0;
        this.setState(() => {
            return { cart: [...tempCart], product: [...tempProducts] };
        }, () => {
            this.addTotals();
        });
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            this.storeProducts();
            this.addTotals();
        });
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    addToMyProducts = () => {
        this.setState(() => {
            return { myOrders: [...this.state.tempMyOrders] };
        });
    }

    storeProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts }
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                addToMyProducts: this.addToMyProducts,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }

    componentDidMount() {
        this.storeProducts();
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }