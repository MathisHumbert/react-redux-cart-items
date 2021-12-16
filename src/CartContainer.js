import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getTotals } from './actions';
import CartItem from './CartItem';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cart, price } = useSelector((state) => state.rootReducer);

  React.useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${price.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
