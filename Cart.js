export const Cart = ({ cart, setCart }) => (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : <ul>{cart.map((item, i) => <li key={i}>{item}</li>)}</ul>}
    </div>
  );
  