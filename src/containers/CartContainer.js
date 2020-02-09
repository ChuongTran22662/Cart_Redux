import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actDeleteProductInCart, actChangeMessage, actupdateProductInCart } from '../actions';

class CartContainer extends Component {
    render() {

        var { cart } = this.props;

        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var result = <tr><td>{Message.MSG_CARD_EMPTY}</td></tr>;
        var { onDeleteProductInCart, onChangeMessage, onUpdateProductInCart } = this.props;

        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem key={index} item={item} index={index} onDeleteProductInCart={onDeleteProductInCart} onChangeMessage={onChangeMessage} onUpdateProductInCart={onUpdateProductInCart} />
                )
            });
        }

        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            return <CartResult cart={cart} />
        }
        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actupdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);