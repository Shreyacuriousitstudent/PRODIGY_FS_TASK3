export const ProductDetails = ({ cart, setCart }) => (
    <div className="product-details">
      <h2>Product Details</h2>
      <button onClick={() => setCart([...cart, "Product 1"])}>Add to Cart</button>
    </div>
  );
  