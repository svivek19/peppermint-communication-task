import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  const gst = totalPrice * 0.18;
  const grandTotal = totalPrice + gst;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, totalPrice, gst, grandTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
