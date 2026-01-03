import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, gst, grandTotal } = useCart();

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl text-center max-w-md">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Icon
                icon="mdi:cart-outline"
                width="48"
                className="text-gray-400"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add some products to get started!
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Icon icon="mdi:arrow-left" width="20" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-4"
            >
              <Icon icon="mdi:arrow-left" width="20" />
              <span className="font-medium">Continue Shopping</span>
            </Link>
            <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">
              {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div className="flex-grow">
                      <h3 className="font-bold text-lg text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Icon
                    icon="mdi:receipt-text-outline"
                    width="24"
                    className="text-blue-600"
                  />
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ₹{totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span className="flex items-center gap-2">
                      GST (18%)
                      <Icon
                        icon="mdi:information-outline"
                        width="16"
                        className="text-gray-400"
                      />
                    </span>
                    <span className="font-semibold">₹{gst.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{grandTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Icon icon="mdi:lock-outline" width="24" />
                  Proceed to Checkout
                </button>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Icon
                      icon="mdi:truck-fast-outline"
                      width="20"
                      className="text-green-600 mt-0.5 flex-shrink-0"
                    />
                    <span>Free delivery on orders above ₹999</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Icon
                      icon="mdi:shield-check-outline"
                      width="20"
                      className="text-blue-600 mt-0.5 flex-shrink-0"
                    />
                    <span>Secure checkout with encryption</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Icon
                      icon="mdi:sync"
                      width="20"
                      className="text-purple-600 mt-0.5 flex-shrink-0"
                    />
                    <span>Easy 30-day returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
