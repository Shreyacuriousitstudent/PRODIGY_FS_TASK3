export const Navbar = ({ cart }) => (
    <nav className="navbar">
      <h1>Store</h1>
      <p>Cart: {cart.length} items</p>
    </nav>
  );