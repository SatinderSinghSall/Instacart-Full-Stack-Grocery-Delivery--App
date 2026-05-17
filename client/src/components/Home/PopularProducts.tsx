import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import toast from "react-hot-toast";

import type { Product } from "../../types";
import ProductCard from "../ProductCard";

import api from "../../config/api";

const PopularProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products?sort=rating")
      .then(({ data }) => {
        setProducts(data.products);
      })
      .catch((error: any) => {
        toast.error(error.response.data.message || error?.message);
      });
  }, []);

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Popular Products</h2>
            <p className="text-sm text-app-text-light mt-1">
              Top-rated products this season
            </p>
          </div>
          <Link
            to="/products"
            className="text-sm font-semibold text-app-orange hover:text-app-orange-dark flex items-center gap-1 transition-colors"
          >
            View All <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-8">
            {products.slice(0, 10).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-3xl border border-dashed border-app-border bg-gradient-to-br from-orange-50 to-white">
            <div className="size-16 rounded-2xl bg-app-orange/10 flex items-center justify-center mb-5">
              <span className="text-3xl">🛒</span>
            </div>

            <h3 className="text-xl font-semibold text-zinc-900">
              No Popular Products Found
            </h3>

            <p className="text-sm text-app-text-light mt-2 max-w-md">
              We couldn&apos;t find any trending products right now. Check back
              later for fresh arrivals and top-rated grocery picks.
            </p>

            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-app-orange text-white text-sm font-medium hover:bg-app-orange-dark transition-colors"
            >
              Browse Products
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularProducts;
