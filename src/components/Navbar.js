import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-m-5 bg-primary">
                <Link to="/">
                    <img src={logo} className="navbar-brand" alt="logo" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span>
                            <i className="fa fa-cart-plus"></i>
                        </span> My Cart
                    </ButtonContainer>
                </Link>
                <Link to="/my-orders" className="">
                    <ButtonContainer>
                        <span><i className="fa fa-gift"></i>
                        </span> My orders
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue)!important;
.nav-link{
    color: var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`

