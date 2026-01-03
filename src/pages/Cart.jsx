import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

const Cart = () => {
  const { cart, totalPrice, gst, grandTotal } = useCart();

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.map((item, index) => (
          <div key={index} className="flex justify-between py-2 border-b">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <div className="mt-4 space-y-1">
          <p>Total: ₹{totalPrice.toFixed(2)}</p>
          <p>GST (18%): ₹{gst.toFixed(2)}</p>
          <p className="font-bold">Grand Total: ₹{grandTotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
