import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import toast from "react-hot-toast";

import type { Product } from "../../types";
import { dummyProducts } from "../../assets/assets";
import ProductCard from "../ProductCard";

// import api from "../../config/api";

const PopularProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // api
    //   .get("/products?sort=rating")
    //   .then(({ data }) => {
    //     setProducts(data.products);
    //   })
    //   .catch((error: any) => {
    //     toast.error(error.response.data.message || error?.message);
    //   });

    setProducts(dummyProducts.slice(0, 10));
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-4 xl:gap-8">
          {products.slice(0, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
