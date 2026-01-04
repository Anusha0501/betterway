import CartItem from "./CartItem";

export default function Cart({ cart, updateQty, removeItem }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 && <p>Empty cart</p>}

      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          updateQty={updateQty}
          removeItem={removeItem}
        />
      ))}

<h3 className="cart-total">Total: ₹{total}</h3>
    </div>
  );
}
