# Full-Stack Grocery Delivery Platform

# 🛒 Grocery Delivery Frontend

A modern and responsive frontend application for the **Full-Stack Grocery Delivery Platform**, built using:

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Leaflet Maps

This frontend provides a complete user experience for:

- Customers
- Admins
- Delivery Partners

---

# 📌 Table of Contents

- Project Overview
- Features
- Tech Stack
- Folder Structure
- UI Modules
- State Management
- Routing
- API Integration
- Environment Variables
- Installation
- Running the App
- Build & Deployment
- Future Improvements

---

# 🧠 Project Overview

The frontend application is designed to simulate a modern grocery delivery platform similar to:

- Blinkit
- Instacart
- BigBasket
- Zepto
- Swiggy Instamart

The application provides:

- Responsive shopping experience
- Real-time order tracking
- Checkout system
- Admin management dashboard
- Delivery partner dashboard

---

# 🎨 UI Features

# 👤 Customer Features

- Modern Home Page
- Product Browsing
- Product Search
- Product Filtering
- Shopping Cart Sidebar
- Checkout Flow
- Address Management
- Order Tracking
- Order History
- Authentication System

---

# 👨‍💼 Admin Features

- Admin Dashboard
- Product Management
- Order Monitoring
- Delivery Partner Management

---

# 🚚 Delivery Features

- Delivery Dashboard
- Assigned Orders
- OTP Verification
- Delivery Status Updates

---

# ⚙️ Tech Stack

| Technology       | Purpose           |
| ---------------- | ----------------- |
| React 19         | Frontend Library  |
| TypeScript       | Type Safety       |
| Vite             | Build Tool        |
| Tailwind CSS     | Styling           |
| React Router DOM | Routing           |
| Axios            | API Communication |
| React Hot Toast  | Notifications     |
| Leaflet          | Maps              |
| React Leaflet    | Map Components    |

---

# 📂 Folder Structure

```text
client/
│
├── public/
│
├── src/
│   ├── assets/             # Images & static assets
│   ├── components/         # Reusable UI components
│   ├── config/             # API configuration
│   ├── context/            # React Context state management
│   ├── pages/              # Application pages
│   ├── types/              # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── package.json
├── vite.config.ts
└── tsconfig.json
```

# File Tree: client

**Generated:** 5/13/2026, 7:24:02 PM
**Root Path:** `e:\My Projects\Full-Stack Grocery Delivery - Demo\client`

```
├── 📁 public
│   └── 🖼️ favicon.svg
├── 📁 src
│   ├── 📁 assets
│   │   ├── 📄 DummyReviewsSection.tsx
│   │   ├── 📄 assets.ts
│   │   ├── 🖼️ baby_care.png
│   │   ├── 🖼️ bakery.png
│   │   ├── 🖼️ dairy_eggs.png
│   │   ├── 🖼️ delivery_truck.svg
│   │   ├── 🖼️ drinks.png
│   │   ├── 🖼️ frozen_foods.png
│   │   ├── 🖼️ fruits_vegetables.png
│   │   ├── 🖼️ hero_bg.jpeg
│   │   ├── 🖼️ meat_seafood.png
│   │   ├── 🖼️ pantry_staples.png
│   │   ├── 🖼️ personal_care.png
│   │   ├── 🖼️ snacks.png
│   │   └── 🖼️ unnamed.jpg
│   ├── 📁 components
│   │   ├── 📁 Checkout
│   │   │   ├── 📄 CheckoutAddress.tsx
│   │   │   ├── 📄 CheckoutPayment.tsx
│   │   │   └── 📄 CheckoutReview.tsx
│   │   ├── 📁 Delivery
│   │   │   ├── 📄 CancelModal.tsx
│   │   │   ├── 📄 DeliveryOrderCard.tsx
│   │   │   └── 📄 OtpModal.tsx
│   │   ├── 📁 Home
│   │   │   ├── 📄 AppPromoBanner.tsx
│   │   │   ├── 📄 Features.tsx
│   │   │   ├── 📄 Hero.tsx
│   │   │   ├── 📄 HomeCategories.tsx
│   │   │   ├── 📄 Newsletter.tsx
│   │   │   └── 📄 PopularProducts.tsx
│   │   ├── 📁 OrderTracking
│   │   │   ├── 📄 LiveMap.tsx
│   │   │   ├── 📄 OrderOTP.tsx
│   │   │   └── 📄 OrderTimeLine.tsx
│   │   ├── 📄 AddressCard.tsx
│   │   ├── 📄 AddressForm.tsx
│   │   ├── 📄 Banner.tsx
│   │   ├── 📄 CartSidebar.tsx
│   │   ├── 📄 FilterPanel.tsx
│   │   ├── 📄 Footer.tsx
│   │   ├── 📄 Loading.tsx
│   │   ├── 📄 Navbar.tsx
│   │   ├── 📄 ProductCard.tsx
│   │   └── 📄 ProtectedRoute.tsx
│   ├── 📁 config
│   │   └── 📄 api.ts
│   ├── 📁 context
│   │   ├── 📄 AuthContext.tsx
│   │   └── 📄 CartContext.tsx
│   ├── 📁 pages
│   │   ├── 📁 admin
│   │   │   ├── 📄 AdminDashboard.tsx
│   │   │   ├── 📄 AdminDeliveryPartners.tsx
│   │   │   ├── 📄 AdminLayout.tsx
│   │   │   ├── 📄 AdminOrders.tsx
│   │   │   ├── 📄 AdminProductForm.tsx
│   │   │   └── 📄 AdminProducts.tsx
│   │   ├── 📁 delivery
│   │   │   ├── 📄 DeliveryDashboard.tsx
│   │   │   ├── 📄 DeliveryLayout.tsx
│   │   │   └── 📄 DeliveryLogin.tsx
│   │   ├── 📄 Addresses.tsx
│   │   ├── 📄 AppLayout.tsx
│   │   ├── 📄 Checkout.tsx
│   │   ├── 📄 FlashDeals.tsx
│   │   ├── 📄 Home.tsx
│   │   ├── 📄 Login.tsx
│   │   ├── 📄 MyOrders.tsx
│   │   ├── 📄 OrderTracking.tsx
│   │   ├── 📄 ProductPage.tsx
│   │   ├── 📄 Products.tsx
│   │   └── 📄 SearchResults.tsx
│   ├── 📁 types
│   │   └── 📄 index.ts
│   ├── 📄 App.tsx
│   ├── 🎨 index.css
│   └── 📄 main.tsx
├── ⚙️ .gitignore
├── 📝 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.json
├── ⚙️ tsconfig.node.json
├── ⚙️ vercel.json
└── 📄 vite.config.ts
```

---

_Generated by FileTree Pro Extension_

---

# 🧩 Application Modules

# 🏠 Home Module

Components:

- Hero Section
- Product Categories
- Popular Products
- Features Section
- Newsletter Section
- Promotional Banner

---

# 🛍️ Product Module

Features:

- Product Listing
- Product Details
- Flash Deals
- Search Results
- Filtering System

---

# 🛒 Cart & Checkout Module

Features:

- Cart Sidebar
- Checkout Address
- Checkout Review
- Payment System

---

# 📦 Order Tracking Module

Features:

- Live Tracking Map
- Delivery Timeline
- OTP Verification

Uses:

- Leaflet Maps
- React Leaflet

---

# 🔐 Authentication Module

Features:

- Login System
- Protected Routes
- JWT-based Authentication

---

# 👨‍💼 Admin Dashboard

Pages:

- Admin Dashboard
- Product Management
- Order Management
- Delivery Partner Management

---

# 🚚 Delivery Dashboard

Pages:

- Delivery Login
- Delivery Dashboard
- Order Status Updates

---

# 🧠 State Management

The application uses React Context API.

## Contexts

| Context     | Purpose              |
| ----------- | -------------------- |
| AuthContext | Authentication State |
| CartContext | Shopping Cart State  |

---

# 🌐 Routing System

The application uses:

```text
react-router-dom
```

Features:

- Nested Routes
- Protected Routes
- Admin Routes
- Delivery Routes

---

# 🔌 API Integration

API communication is handled using:

```text
Axios
```

Base API URL:

```env
VITE_BASE_URL="http://localhost:5000/api"
```

---

# 🌍 Environment Variables

Create a `.env` file inside the `client` folder.

```env
VITE_CURRENCY_SYMBOL="$"
VITE_BASE_URL="http://localhost:5000/api"
```

---

# 🛠️ Installation Guide

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/full-stack-grocery-delivery.git
```

---

# 2️⃣ Navigate to Client

```bash
cd client
```

---

# 3️⃣ Install Dependencies

```bash
npm install
```

---

# 4️⃣ Start Development Server

```bash
npm run dev
```

---

# 🌍 Development URL

```text
http://localhost:5173
```

---

# 🏗️ Build for Production

```bash
npm run build
```

---

# 🔍 Preview Production Build

```bash
npm run preview
```

---

# 📱 Responsive Design

The frontend is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile Devices

---

# 🎨 Styling System

The project uses:

- Tailwind CSS
- Utility-first design approach
- Modern responsive layouts

---

# 🔒 Security Features

- Protected Routes
- JWT Authentication
- Secure API Communication

---

# ⚡ Performance Features

- Vite Fast Refresh
- Optimized React Rendering
- Lazy UI Structure
- Efficient API Calls

---

# ☁️ Deployment

Recommended deployment platforms:

| Service | Usage            |
| ------- | ---------------- |
| Vercel  | Frontend Hosting |
| Netlify | Frontend Hosting |

---

# 🚀 Future Improvements

Potential enhancements:

- Dark Mode
- PWA Support
- Push Notifications
- AI Recommendations
- Real-time Tracking
- Wishlist System
- Advanced Analytics

---

# 👨‍💻 Author

## Satinder Singh Sall

Full-Stack Developer

---

# 📄 License

MIT License

---

# ⭐ Acknowledgements

- React
- Tailwind CSS
- Vite
- React Router
- Leaflet
- Open Source Community
