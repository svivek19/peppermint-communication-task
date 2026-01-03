import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover rounded-lg"
      />

      <h3 className="mt-3 font-semibold text-gray-800">{product.name}</h3>

      <p className="text-sm text-gray-500 mt-1">{product.shortDescription}</p>

      <div className="mt-2 font-bold text-lg">₹{product.price}</div>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
