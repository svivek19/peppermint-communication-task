import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-800">
          ShopNow
        </Link>

        <Link to="/cart" className="relative flex items-center">
          <Icon icon="mdi:cart-outline" width="26" className="text-gray-800" />

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
