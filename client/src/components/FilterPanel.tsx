const FilterPanel = ({
  categories,
  category,
  minPrice,
  maxPrice,
  updateFilter,
  clearFilters,
  hasFilters,
}: any) => {
  const categoriesWithAll = [
    { slug: "", name: "All Categories" },
    ...categories,
  ];

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-app-green mb-3">
          Categories
        </h3>
        <div className="space-y-1.5">
          {categoriesWithAll.map((cat: any) => (
            <button
              key={cat.slug}
              onClick={() => updateFilter("category", cat.slug)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-all ${category === cat.slug ? "bg-app-green text-white" : "text-app-text-light hover:bg-app-cream"}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-app-green mb-3">
          Price Range
        </h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => updateFilter("minPrice", e.target.value)}
            className="w-full px-3 py-2 text-sm bg-white rounded-lg border not-focus:border-app-border"
          />

          <span className="text-app-text-light">-</span>

          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => updateFilter("maxPrice", e.target.value)}
            className="w-full px-3 py-2 text-sm bg-white rounded-lg border not-focus:border-app-border"
          />
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="w-full py-2 text-sm text-app-error hover:bg-red-50 rounded-lg transition-colors font-medium"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default FilterPanel;
