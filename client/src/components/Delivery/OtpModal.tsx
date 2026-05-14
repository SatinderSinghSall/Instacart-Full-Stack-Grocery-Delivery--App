interface OtpModalProps {
  setOtpModal: (otpModal: string | null) => void;
  otp: string;
  setOtp: (otp: string) => void;
  handleComplete: () => void;
  submitting: boolean;
}

export default function OtpModal({
  setOtpModal,
  otp,
  setOtp,
  handleComplete,
  submitting,
}: OtpModalProps) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setOtpModal(null)}
      />
      <div className="fixed inset-0 z-50 flex-center p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-sm animate-fade-in">
          <h3 className="text-lg font-semibold text-app-green mb-2">
            Enter Delivery OTP
          </h3>
          <p className="text-sm text-zinc-500 mb-5">
            Ask the customer for the 6-digit OTP shown on their tracking page.
          </p>
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="000000"
            className="w-full px-4 py-3 text-center text-2xl font-mono tracking-[0.5em] rounded-xl border border-app-border focus:border-app-green outline-none mb-4"
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                setOtpModal(null);
                setOtp("");
              }}
              className="flex-1 py-2.5 text-sm font-medium text-zinc-600 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleComplete}
              disabled={otp.length !== 6 || submitting}
              className="flex-1 py-2.5 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {submitting ? "Verifying..." : "Confirm Delivery"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
