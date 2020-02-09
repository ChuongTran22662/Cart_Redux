import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {

    render() {

        var { item } = this.props;
        var { quantity } = item;

        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} className="img-fluid z-depth-0" alt={item.product.name} />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}>
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light" onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}>
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        this.props.onUpdateProductInCart(product, quantity);
        this.props.onChangeMessage(Message.MSG_UPDATE_CARD_SUCCESS);
    }

    onDelete = (product) => {
        this.props.onDeleteProductInCart(product);
        this.props.onChangeMessage(Message.MSG_DELETE_IN_CARD_SUCCESS);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;
