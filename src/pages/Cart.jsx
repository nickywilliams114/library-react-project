import React, { useState, useEffect } from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price;
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((item) => {
                  return (
                    <div className="cart__item" key={item.id}>
                      <div className="cart__book">
                        <img
                          src={item.url}
                          className="cart__book--img"
                          alt=""
                        />
                        <div className="cart__book__info">
                          <span className="cart__book--title">
                            {item.title}
                          </span>
                          <span className="cart__book--price">
                            ${(item.salePrice || item.originalPrice).toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(item)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          class="cart__input"
                          min={0}
                          max={99}
                          value={item.quantity}
                          onChange={(event) =>
                            changeQuantity(item, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(item.salePrice || item.originalPrice) * item.quantity}
                      </div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={EmptyCart} alt="" className="cart__empty--img" />
                  <h2>You don't have any books in your cart!</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                {total &&
                  total.subtotal &&
                  total.tax &&
                  total.total(
                    <>
                      <div className="total__item total__sub-total">
                        <span>Subtotal</span>
                        <span>${total.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="total__item total__tax">
                        <span>Tax</span>
                        <span>${total.tax.toFixed(2)}</span>
                      </div>
                      <div className="total__item total__price">
                        <span>Total</span>
                        <span>${total.total.toFixed(2)}</span>
                      </div>
                    </>
                  )}
                <button
                  className="btn btn__checkout"
                  onClick={() => alert(`Are you sure? `)}
                >
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
