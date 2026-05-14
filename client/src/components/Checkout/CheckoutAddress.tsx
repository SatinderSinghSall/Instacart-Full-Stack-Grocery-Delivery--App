import { ChevronRightIcon, MapPinIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CheckoutAddress = ({ user, address, setAddress, setStep }: any) => {
  return (
    <div className="bg-white rounded-2xl p-6 animate-fade-in">
      <h2 className="text-lg font-semibold text-app-green mb-5 flex items-center gap-2">
        <MapPinIcon className="size-5" /> Delivery Address
      </h2>
      {user?.addresses && user.addresses.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-app-green mb-3">
            Saved Addresses
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {user.addresses.map((addr: any) => (
              <div
                key={addr._id || addr.label}
                onClick={() =>
                  setAddress({
                    label: addr.label,
                    address: addr.address,
                    city: addr.city,
                    state: addr.state,
                    zip: addr.zip,
                    lat: addr.lat,
                    lng: addr.lng,
                  })
                }
                className={`p-4 rounded-xl border cursor-pointer transition-colors ${address.label === addr.label && address.address === addr.address ? "border-app-green bg-app-cream" : "border-app-border hover:bg-app-cream"}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPinIcon className="size-4 text-app-green" />
                  <span className="font-semibold text-zinc-900 text-sm">
                    {addr.label}
                  </span>
                  {addr.isDefault && (
                    <span className="text-[10px] font-semibold text-app-orange uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-600 truncate">{addr.address}</p>
                <p className="text-xs text-zinc-500">
                  {addr.city}, {addr.state} {addr.zip}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <Link
        to="/addresses"
        className="mt-6 px-6 py-3 border border-gray-600 text-gray-600 rounded-xl flex-center gap-2"
      >
        Add New Address <PlusIcon className="size-4" />
      </Link>
      <button
        onClick={() => {
          setStep("payment");
          scrollTo(0, 0);
        }}
        disabled={!address.address || !address.city}
        className="mt-6 px-6 py-3 bg-app-green text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors disabled:opacity-50 flex items-center gap-2"
      >
        Continue to Payment <ChevronRightIcon className="size-4" />
      </button>
    </div>
  );
};

export default CheckoutAddress;
