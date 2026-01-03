import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
              <Icon icon="mdi:shopping" width="24" className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ShopNow
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative group">
              <div className="bg-slate-700 p-3 rounded-full group-hover:bg-slate-600 transition-all duration-300 group-hover:scale-110">
                <Icon
                  icon="mdi:cart-outline"
                  width="24"
                  className="text-white"
                />

                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold min-w-[20px] h-5 flex items-center justify-center rounded-full px-1.5 shadow-lg animate-pulse">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
