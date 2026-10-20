import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
  clearCart
} from "./CartSlice.jsx";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  return (
    <main className="page-wrap cart-page">
      <section className="page-intro cart-intro">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>Your future indoor jungle, all in one place.</p>
      </section>

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-cart-icon" aria-hidden="true">🪴</div>
          <h2>Your cart is waiting for some green.</h2>
          <p>Explore the collection and add a plant you love.</p>
          <Link className="button" to="/plants">Continue Shopping</Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Items in your cart">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-thumb" />
                <div className="cart-product-info">
                  <h2>{item.name}</h2>
                  <p className="unit-price">${item.price.toFixed(2)} <span>each</span></p>
                  <button className="text-button remove-button" onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
                <div className="line-total">
                  <span>Item total</span>
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              </article>
            ))}
          </section>

          <aside className="order-summary">
            <p className="eyebrow">ORDER SUMMARY</p>
            <h2>Cart total</h2>
            <div className="summary-line">
              <span>Items ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-line">
              <span>Delivery</span>
              <span className="free-label">Calculated later</span>
            </div>
            <div className="summary-total">
              <span>Subtotal</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button className="button checkout-button" onClick={() => setCheckoutMessage("Coming Soon — checkout is not available yet.")}>
              Checkout
            </button>
            {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
            <Link className="continue-link" to="/plants">← Continue Shopping</Link>
            <button className="text-button clear-cart" onClick={() => { dispatch(clearCart()); setCheckoutMessage(""); }}>
              Clear cart
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
