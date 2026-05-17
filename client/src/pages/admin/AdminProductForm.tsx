import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

import { categoriesData } from "../../assets/assets";
import Loading from "../../components/Loading";
import api from "../../config/api";
import toast from "react-hot-toast";

export default function AdminProductForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    originalPrice: "",
    image: "",
    category: "",
    unit: "",
    stock: "",
    isOrganic: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isEdit) {
          const { data: prodData } = await api.get(`/products/${id}`);
          const p = prodData.product;
          setFormData({
            name: p.name,
            description: p.description,
            price: p.price.toString(),
            originalPrice: p.originalPrice ? p.originalPrice.toString() : "",
            image: p.image,
            category: p.category,
            unit: p.unit,
            stock: p.stock.toString(),
            isOrganic: p.isOrganic,
          });
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, isEdit]);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let finalImageUrl = formData.image;

      if (imageFile) {
        const formDataUpload = new FormData();
        formDataUpload.append("image", imageFile);
        const { data } = await api.post("/upload", formDataUpload);
        finalImageUrl = data.url;
      }

      if (!finalImageUrl) {
        toast.error("Please upload a product image");
        setSaving(false);
        return;
      }

      const payload = {
        ...formData,
        image: finalImageUrl,
        price: Number(formData.price),
        originalPrice: formData.originalPrice
          ? Number(formData.originalPrice)
          : 0,
        stock: Number(formData.stock),
      };

      if (isEdit) {
        await api.put(`/products/${id}`, payload);
        toast.success("Product updated successfully");
      } else {
        await api.post("/products", payload);
        toast.success("Product created successfully");
      }
      navigate("/admin/products");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to save product");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-app-border overflow-hidden">
        <div className="px-6 py-5 border-b border-app-border flex items-center gap-4">
          <Link
            to="/admin/products"
            className="p-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-500 rounded-lg transition-colors"
          >
            <ArrowLeftIcon className="size-5" />
          </Link>
          <h2 className="text-xl font-semibold text-zinc-900">
            {isEdit ? "Edit Product" : "New Product"}
          </h2>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-app-green focus:ring-1 focus:ring-app-green outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Category
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-app-green focus:ring-1 focus:ring-app-green outline-none transition-all bg-white"
                >
                  <option value="">Select a category</option>
                  {categoriesData.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Price ($)
                </label>
                <input
                  required
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-app-green focus:ring-1 focus:ring-app-green outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Original Price ($) - Optional
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.originalPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, originalPrice: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-app-green focus:ring-1 focus:ring-app-green outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Unit
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g., kg, piece, liter"
                  value={formData.unit}
                  onChange={(e) =>
                    setFormData({ ...formData, unit: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-app-green focus:ring-1 focus:ring-app-green outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Stock
                </label>
                <input
                  required
                  type="number"
                  min="0"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-app-green focus:ring-1 focus:ring-app-green outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Product Image
                </label>
                <div className="flex items-center gap-4">
                  {(imageFile || formData.image) && (
                    <div className="size-16 rounded-lg border border-zinc-200 overflow-hidden shrink-0 bg-app-cream">
                      <img
                        src={
                          imageFile
                            ? URL.createObjectURL(imageFile)
                            : formData.image
                        }
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                    className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-app-green outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-app-orange file:text-white hover:file:bg-orange-600 cursor-pointer"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Description
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 focus:border-app-green focus:ring-1 focus:ring-app-green outline-none transition-all resize-none"
                />
              </div>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="isOrganic"
                  className="text-sm font-medium text-zinc-700 cursor-pointer"
                >
                  Organic
                </label>
                <input
                  type="checkbox"
                  id="isOrganic"
                  checked={formData.isOrganic}
                  onChange={(e) =>
                    setFormData({ ...formData, isOrganic: e.target.checked })
                  }
                  className="size-5 text-app-green rounded border-zinc-300 focus:ring-app-green cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-app-border flex justify-end">
              <button
                disabled={saving}
                type="submit"
                className="px-6 py-2.5 bg-app-orange text-white font-medium rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Product"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
