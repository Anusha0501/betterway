export default function CartItem({ item, updateQty, removeItem }) {
    return (
      <div className="cart-item">
        <span>{item.title}</span>
        <input
          type="number"
          min="1"
          max={item.stock}
          value={item.qty}
          onChange={e => updateQty(item.id, Number(e.target.value))}
        />
        <button onClick={() => removeItem(item.id)}>❌</button>
      </div>
    );
  }
  