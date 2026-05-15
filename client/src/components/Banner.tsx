import { TruckIcon, XIcon, ZapIcon } from "lucide-react";
import React, { useState } from "react";

const Banner = () => {
  const [bannerVisible, setBannerVisible] = useState(() => {
    return sessionStorage.getItem("banner_dismissed") !== "true";
  });

  const dismissBanner = () => {
    setBannerVisible(false);
    sessionStorage.setItem("banner_dismissed", "true");
  };

  return (
    <div>
      {bannerVisible && (
        <div className="bg-linear-to-r from-app-green via-emerald-800 to-app-green text-white text-xs sm:text-sm relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex-center gap-6">
            <div className="flex-center gap-2">
              <TruckIcon className="size-4 shrink-0" />
              <span className="font-medium">
                Free delivery on orders above ₹1,919.14
              </span>
            </div>

            <span className="hidden sm:inline text-white/40"> | </span>

            <div className="hidden sm:flex items-center gap-2">
              <ZapIcon className="size-4 shrink-0 fill-yellow-400 text-yellow-400 shrink-0" />
              <span>Farm-fresh produce delivered daily</span>
            </div>
          </div>

          <button
            onClick={dismissBanner}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full"
          >
            <XIcon className="size-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
