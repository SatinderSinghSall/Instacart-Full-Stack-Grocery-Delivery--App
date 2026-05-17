import { useEffect, useState } from "react";
import { PlusIcon, XIcon, TruckIcon, PhoneIcon, MailIcon } from "lucide-react";
import toast from "react-hot-toast";

import type { DeliveryPartner } from "../../types";
import Loading from "../../components/Loading";
import api from "../../config/api";

export default function AdminDeliveryPartners() {
  const [partners, setPartners] = useState<DeliveryPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    vehicleType: "bike",
  });

  const fetchPartners = async () => {
    try {
      const { data } = await api.get("/admin/delivery-partners");
      setPartners(data.partners);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.post("/admin/delivery-partners", form);
      toast.success("Partner onboarded successfully!");
      setShowForm(false);
      setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
        vehicleType: "bike",
      });
      fetchPartners();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed");
    } finally {
      setSaving(false);
    }
  };

  const toggleActive = async (id: string, isActive: boolean) => {
    try {
      await api.put(`/admin/delivery-partners/${id}`, { isActive: !isActive });
      toast.success(isActive ? "Partner deactivated" : "Partner activated");
      fetchPartners();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed");
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-zinc-900">
          Delivery Partners
        </h1>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-app-green text-white text-sm font-semibold rounded-xl hover:bg-app-green-light transition-colors flex items-center gap-2"
        >
          <PlusIcon className="size-4" /> Add Partner
        </button>
      </div>

      {/* Partners Grid */}
      {partners.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-app-border">
          <TruckIcon className="size-12 text-app-border mx-auto mb-3" />
          <p className="text-lg font-semibold text-zinc-900 mb-1">
            No delivery partners
          </p>
          <p className="text-sm text-zinc-500">
            Onboard your first partner to get started
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {partners.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-app-border p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-app-green flex-center">
                    <span className="text-white font-semibold text-sm">
                      {p.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 text-sm">
                      {p.name}
                    </p>
                    <p className="text-xs text-zinc-500 capitalize">
                      {p.vehicleType}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-1 text-[10px] font-semibold rounded-full ${p.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {p.isActive ? "Active" : "Inactive"}
                </span>
              </div>
              <div className="space-y-1.5 text-sm text-zinc-600">
                <p className="flex items-center gap-2">
                  <MailIcon className="w-3.5 h-3.5 text-zinc-400" /> {p.email}
                </p>
                <p className="flex items-center gap-2">
                  <PhoneIcon className="w-3.5 h-3.5 text-zinc-400" /> {p.phone}
                </p>
              </div>
              <button
                onClick={() => toggleActive(p.id, p.isActive)}
                className={`w-full py-2 text-xs font-medium rounded-lg transition-colors ${p.isActive ? "bg-red-50 text-red-600 hover:bg-red-100" : "bg-green-50 text-green-600 hover:bg-green-100"}`}
              >
                {p.isActive ? "Deactivate" : "Activate"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Partner Modal */}
      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-app-cream/80 backdrop-blur z-50"
            onClick={() => setShowForm(false)}
          />
          <div className="fixed inset-0 z-50 flex-center p-4">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 w-full max-w-lg animate-fade-in"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-app-green">
                  Onboard Delivery Partner
                </h2>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-app-cream rounded-lg"
                >
                  <XIcon className="size-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-app-green mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-app-green mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-app-green mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-app-green mb-1.5">
                      Phone
                    </label>
                    <input
                      type="text"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-app-green mb-1.5">
                      Vehicle Type
                    </label>
                    <select
                      value={form.vehicleType}
                      onChange={(e) =>
                        setForm({ ...form, vehicleType: e.target.value })
                      }
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-app-border focus:border-app-green outline-none bg-white"
                    >
                      <option value="bike">Bike</option>
                      <option value="scooter">Scooter</option>
                      <option value="car">Car</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={saving}
                className="mt-6 w-full py-3 bg-app-green text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors disabled:opacity-60"
              >
                {saving ? "Creating..." : "Create Partner"}
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
