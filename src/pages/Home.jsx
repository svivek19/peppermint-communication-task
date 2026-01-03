import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import productsData from "../utils/products";
import { Icon } from "@iconify/react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  let allProducts = productsData.flatMap((c) => c.products);

  if (category) {
    allProducts = productsData.find((c) => c.name === category)?.products || [];
  }

  allProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") {
    allProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === "high") {
    allProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Discover Amazing Products
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Shop the latest collection with exclusive deals and fast delivery
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                <div className="text-blue-100 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">50k+</div>
                <div className="text-blue-100 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">4.8★</div>
                <div className="text-blue-100 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-10">
        <FilterBar
          setSearch={setSearch}
          setSort={setSort}
          setCategory={setCategory}
          categories={productsData}
        />

        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Icon icon="mdi:package-variant" width="20" />
            <span className="font-medium">
              {allProducts.length}{" "}
              {allProducts.length === 1 ? "Product" : "Products"} Found
            </span>
          </div>

          {(search || category) && (
            <button
              onClick={() => {
                setSearch("");
                setCategory("");
                setSort("");
              }}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              <Icon icon="mdi:close-circle-outline" width="18" />
              Clear Filters
            </button>
          )}
        </div>

        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
            {allProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon
                icon="mdi:package-variant-closed"
                width="48"
                className="text-gray-400"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("");
                setSort("");
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Icon icon="mdi:shopping" width="24" />
                </div>
                <span className="text-xl font-bold">ShopNow</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted online shopping destination for quality products.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Track Order
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="bg-slate-700 p-2 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <Icon icon="mdi:facebook" width="20" />
                </a>
                <a
                  href="#"
                  className="bg-slate-700 p-2 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <Icon icon="mdi:twitter" width="20" />
                </a>
                <a
                  href="#"
                  className="bg-slate-700 p-2 rounded-lg hover:bg-slate-600 transition-colors"
                >
                  <Icon icon="mdi:instagram" width="20" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 ShopNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
