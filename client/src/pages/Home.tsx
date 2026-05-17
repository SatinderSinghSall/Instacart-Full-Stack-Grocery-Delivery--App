import React from "react";

import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import HomeCategories from "../components/Home/HomeCategories";
import PopularProducts from "../components/Home/PopularProducts";
import AppPromoBanner from "../components/Home/AppPromoBanner";
import Newsletter from "../components/Home/Newsletter";

const Home = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Hero />
      <Features />
      <HomeCategories />
      <PopularProducts />
      <AppPromoBanner />
      <Newsletter />
    </div>
  );
};

export default Home;
