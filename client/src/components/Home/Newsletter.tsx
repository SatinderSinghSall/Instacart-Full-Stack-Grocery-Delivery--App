import { MailIcon } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-white py-18 px-4 sm:px-6 lg:px-8 rounded-3xl mx-auto  shadow-xs mt-32 mb-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="size-16 bg-white rounded-xl flex-center mx-auto mb-6 shadow">
          <MailIcon className="size-8 text-app-green" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl font-semibold text-app-green mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-app-text-light mb-8 text-base">
          Get weekly updates on fresh produce, seasonal offers, and exclusive
          discounts right to your inbox.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 px-5 py-3.5 rounded-xl border border-app-border focus:border-app-green focus:ring bg-white text-sm transition-all"
          />

          <button
            type="submit"
            className="px-8 py-3.5 bg-app-green text-white font-semibold rounded-xl hover:bg-app-green-light transition-colors shadow-sm whitespace-nowrap active:scale-[0.98]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
