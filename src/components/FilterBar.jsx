const FilterBar = ({ setSearch, setSort, setCategory, categories }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-full md:w-1/3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border p-2 rounded"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded"
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort by</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
