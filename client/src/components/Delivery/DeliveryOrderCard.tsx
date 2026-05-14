import {
  CheckCircleIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  TruckIcon,
  XCircleIcon,
} from "lucide-react";
import type { Order } from "../../types";
import { statusColors } from "../../assets/assets";

interface DeliveryOrderCardProps {
  order: Order;
  tab: "active" | "completed";
  handleUpdateStatus: (orderId: string, status: string) => void;
  setOtpModal: (orderId: string) => void;
  setCancelModal: (orderId: string) => void;
}

export default function DeliveryOrderCard({
  order,
  tab,
  handleUpdateStatus,
  setOtpModal,
  setCancelModal,
}: DeliveryOrderCardProps) {
  const currency = import.meta.env.VITE_CURRENCY_SYMBOL || "$";

  const user =
    typeof order.user === "object"
      ? order.user
      : { name: "Customer", email: "", phone: "" };

  return (
    <div
      key={order._id}
      className="bg-white rounded-2xl border border-app-border overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-app-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-zinc-500">
            #{order._id.slice(-6).toUpperCase()}
          </span>
          <span
            className={`px-2.5 py-1 text-xs font-semibold rounded-full ${statusColors[order.status] || "bg-zinc-100 text-zinc-600"}`}
          >
            {order.status}
          </span>
        </div>
        <span className="text-sm font-semibold text-zinc-900">
          {currency}
          {order.total.toFixed(2)}
        </span>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        {/* Customer */}
        <div className="flex items-center gap-2 text-sm">
          <div className="size-8 rounded-full bg-app-cream flex-center">
            <span className="text-xs font-semibold text-app-green">
              {user.name?.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium text-zinc-900">{user.name}</p>
            {user.phone && (
              <p className="text-xs text-zinc-500 flex items-center gap-1">
                <PhoneIcon className="size-3" /> {user.phone}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2 text-sm text-zinc-600">
          <MapPinIcon className="size-4 text-app-green shrink-0 mt-0.5" />
          <p>
            {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
            {order.shippingAddress.state} {order.shippingAddress.zip}
          </p>
        </div>

        {/* Items count */}
        <p className="text-xs text-zinc-500">
          {order.items.length} item{order.items.length > 1 ? "s" : ""} •{" "}
          {order.paymentMethod.toUpperCase()}
        </p>
      </div>

      {/* Actions */}
      {tab === "active" && (
        <div className="px-5 py-3 border-t border-app-border flex flex-wrap gap-2">
          {(order.status === "Assigned" || order.status === "Packed") && (
            <button
              onClick={() =>
                handleUpdateStatus(
                  order._id,
                  order.status === "Assigned" ? "Packed" : "Out for Delivery",
                )
              }
              className="px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors flex items-center gap-1.5"
            >
              <TruckIcon className="w-3.5 h-3.5" />
              {order.status === "Assigned" ? "Mark Packed" : "Out for Delivery"}
            </button>
          )}
          {order.status === "Out for Delivery" && (
            <button
              onClick={() => setOtpModal(order._id)}
              className="px-4 py-2 text-sm font-medium bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors flex items-center gap-1.5"
            >
              <CheckCircleIcon className="w-3.5 h-3.5" /> Mark Delivered
            </button>
          )}
          {order.status !== "Delivered" && order.status !== "Cancelled" && (
            <button
              onClick={() => setCancelModal(order._id)}
              className="px-4 py-2 text-sm font-medium bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-colors flex items-center gap-1.5"
            >
              <XCircleIcon className="w-3.5 h-3.5" /> Cancel
            </button>
          )}
        </div>
      )}

      {tab === "completed" && (
        <div className="px-5 py-3 border-t border-app-border">
          <p className="text-xs text-zinc-500 flex items-center gap-1">
            <ClockIcon className="size-3" />
            {new Date(order.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      )}
    </div>
  );
}
