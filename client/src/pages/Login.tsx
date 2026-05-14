import React, { useState } from "react";
import { Link } from "react-router-dom";

import { heroSectionData } from "../assets/assets";
import {
  BikeIcon,
  EyeIcon,
  EyeOffIcon,
  Loader2Icon,
  LockIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";

const Login = () => {
  const [isLoginState, setIsLoginState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => (window.location.href = "/"), 1000);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center  justify-center">
        <img
          src={heroSectionData.hero_image}
          className="absolute inset-0 object-cover h-full bg-center opacity-10"
          alt="Hero Image of Varieties of Vegetables."
        />

        <div className="relative text-center px-12">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Welcome back to Satinder Instacart
          </h2>
          <p className="text-white/60 font-serif text-xl max-w-sm mx-auto">
            Fresh groceries and organic produce, delivered to your doorstep.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex-center px-4 py-12 bg-app-cream">
        <div className="w-full max-w-md">
          {/* Form Header Message */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <BikeIcon className="size-8 text-app-green" />
              <span className="text-2xl font-semibold text-app-green">
                Satinder Instacart
              </span>
            </Link>

            <h1 className="text-2xl font-semibold text-app-green mb-2">
              {isLoginState
                ? "Sign-in to your account"
                : "Sign-up for an account"}
            </h1>

            <p className="text-sm text-app-text-light">
              {isLoginState
                ? "Don't have an Account?"
                : "Already have an Account?"}

              <button
                onClick={() => setIsLoginState(!isLoginState)}
                className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors"
              >
                {isLoginState ? "Create One" : "Sign-in"}
              </button>
            </p>
          </div>

          {/* Login / Register Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLoginState && (
              <label className="text-sm flex flex-col gap-1">
                Name:
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                  />
                </div>
              </label>
            )}

            <label className="text-sm flex flex-col gap-1">
              Email Address:
              <div className="relative">
                <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                />
              </div>
            </label>

            <label className="text-sm flex flex-col gap-1">
              Password:
              <div className="relative">
                <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="• • • • • • •"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-app-text-light hover:text-app-green transition-colors"
                >
                  {showPassword ? (
                    <EyeOffIcon className="size-4" />
                  ) : (
                    <EyeIcon className="size-4" />
                  )}
                </button>
              </div>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-950"
            >
              {loading ? (
                <Loader2Icon className="animate-spin" />
              ) : isLoginState ? (
                "Sign-in"
              ) : (
                "Sign-up"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
