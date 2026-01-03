import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import productsData from "../utils/products";

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
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <FilterBar
          setSearch={setSearch}
          setSort={setSort}
          setCategory={setCategory}
          categories={productsData}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
