import { ClockIcon, CheckIcon, TruckIcon, PackageIcon } from "lucide-react";

export default function OrderTimeLine({ order }: { order: any }) {
  const allStatuses = [
    "Placed",
    "Confirmed",
    "Assigned",
    "Packed",
    "Out for Delivery",
    "Delivered",
  ];
  const currentIdx = allStatuses.indexOf(order.status);

  const statusIcons: any = {
    Placed: ClockIcon,
    Confirmed: CheckIcon,
    Assigned: TruckIcon,
    Packed: PackageIcon,
    "Out for Delivery": TruckIcon,
    Delivered: CheckIcon,
  };

  return (
    <div className="bg-white rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-app-green mb-6">
        Delivery Progress
      </h2>
      <div className="space-y-0">
        {allStatuses.map((status, i) => {
          const Icon = statusIcons[status] || PackageIcon;
          const isCompleted = i <= currentIdx;
          const isCurrent = i === currentIdx;

          const historyEntry = order.statusHistory.find(
            (h: any) => h.status === status,
          );

          return (
            <div key={status} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`size-9 rounded-full flex-center shrink-0 ${isCompleted ? "bg-app-green text-white" : "bg-app-cream text-app-text-light"} ${isCurrent ? "ring-4 ring-app-green/20" : ""}`}
                >
                  <Icon className="size-4" />
                </div>
                {i < allStatuses.length - 1 && (
                  <div
                    className={`w-0.5 h-12 ${i < currentIdx ? "bg-app-green" : "bg-app-border"}`}
                  />
                )}
              </div>
              <div className="pb-6">
                <p
                  className={`text-sm font-semibold ${isCompleted ? "text-app-green" : "text-app-text-light"}`}
                >
                  {status}
                </p>
                {historyEntry && (
                  <p className="text-xs text-app-text-light mt-0.5">
                    {new Date(historyEntry.timestamp).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
