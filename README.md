# Full-Stack Grocery Delivery Platform

# 🛒 Full-Stack Grocery Delivery Platform

A modern, scalable, and production-ready **Full-Stack Grocery Delivery Application** built using:

- React 19
- TypeScript
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Stripe
- Inngest
- Cloudinary

This project simulates a real-world grocery delivery ecosystem similar to:

- Blinkit
- Zepto
- Instacart
- Swiggy Instamart
- BigBasket

The platform includes:

✅ Customer Shopping System  
✅ Admin Dashboard  
✅ Delivery Partner Dashboard  
✅ Real-Time Order Tracking  
✅ Stripe Payments  
✅ Cloud Image Uploads  
✅ Background Event Processing  
✅ Secure Authentication

---

# 📌 Table of Contents

- Project Overview
- Features
- Tech Stack
- Architecture
- Folder Structure
- Frontend Features
- Backend Features
- Authentication
- Database
- API Modules
- Stripe Integration
- Inngest Workflows
- Cloudinary Integration
- Installation Guide
- Environment Variables
- Running the Project
- Build & Deployment
- Security Features
- Scalability
- Future Improvements
- Author
- License

---

# 🧠 Project Overview

The application provides a complete online grocery delivery workflow:

```text
Customer → Order Placement → Payment → Delivery Assignment → Live Tracking → Delivery Completion
```

The project follows a modern **Full-Stack Architecture** with separate frontend and backend applications.

---

# 🏗️ System Architecture

```text
Frontend (React + Vite)
          ↓
REST API (Express.js)
          ↓
Prisma ORM
          ↓
PostgreSQL Database (Neon)
```

External Services:

```text
Stripe       → Payments
Cloudinary   → Image Hosting
Inngest      → Background Jobs
Brevo/SMTP   → Emails
```

---

# 🚀 Core Features

# 👤 Customer Features

- User Registration & Login
- JWT Authentication
- Product Browsing
- Product Search
- Product Filtering
- Shopping Cart
- Checkout Workflow
- Address Management
- Stripe Payments
- Order History
- Live Order Tracking
- OTP Delivery Verification

---

# 👨‍💼 Admin Features

- Admin Dashboard
- Product Management
- Add/Edit/Delete Products
- Order Monitoring
- Delivery Partner Management
- Sales Management

---

# 🚚 Delivery Partner Features

- Delivery Login
- Assigned Orders
- OTP Verification
- Delivery Status Updates
- Order Timeline

---

# ⚙️ Tech Stack

# Frontend

| Technology       | Purpose         |
| ---------------- | --------------- |
| React 19         | UI Library      |
| TypeScript       | Type Safety     |
| Vite             | Build Tool      |
| Tailwind CSS     | Styling         |
| React Router DOM | Routing         |
| Axios            | API Requests    |
| React Hot Toast  | Notifications   |
| Leaflet          | Maps            |
| React Leaflet    | Map Integration |

---

# Backend

| Technology | Purpose          |
| ---------- | ---------------- |
| Node.js    | Runtime          |
| Express.js | REST API         |
| Prisma ORM | Database ORM     |
| PostgreSQL | Database         |
| JWT        | Authentication   |
| bcrypt     | Password Hashing |
| Stripe     | Payments         |
| Cloudinary | Image Hosting    |
| Inngest    | Background Jobs  |
| Nodemailer | Emails           |

---

# 📂 Complete Project Structure

```text
Full-Stack Grocery Delivery - Demo/
│
├── client/                        # Frontend Application
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── config/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── vite.config.ts
│   └── README.md
│
├── server/                        # Backend Application
│   ├── config/
│   ├── controllers/
│   ├── generated/
│   ├── inngest/
│   ├── middleware/
│   ├── prisma/
│   ├── routes/
│   ├── types/
│   │
│   ├── server.ts
│   ├── seed.ts
│   ├── prisma.config.ts
│   └── README.md
│
├── doc/
└── README.md
```

# File Tree: Full-Stack Grocery Delivery - Demo

**Generated:** 5/13/2026, 7:26:47 PM
**Root Path:** `e:\My Projects\Full-Stack Grocery Delivery - Demo`

```
├── 📁 client
│   ├── 📁 public
│   │   └── 🖼️ favicon.svg
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   │   ├── 📄 DummyReviewsSection.tsx
│   │   │   ├── 📄 assets.ts
│   │   │   ├── 🖼️ baby_care.png
│   │   │   ├── 🖼️ bakery.png
│   │   │   ├── 🖼️ dairy_eggs.png
│   │   │   ├── 🖼️ delivery_truck.svg
│   │   │   ├── 🖼️ drinks.png
│   │   │   ├── 🖼️ frozen_foods.png
│   │   │   ├── 🖼️ fruits_vegetables.png
│   │   │   ├── 🖼️ hero_bg.jpeg
│   │   │   ├── 🖼️ meat_seafood.png
│   │   │   ├── 🖼️ pantry_staples.png
│   │   │   ├── 🖼️ personal_care.png
│   │   │   ├── 🖼️ snacks.png
│   │   │   └── 🖼️ unnamed.jpg
│   │   ├── 📁 components
│   │   │   ├── 📁 Checkout
│   │   │   │   ├── 📄 CheckoutAddress.tsx
│   │   │   │   ├── 📄 CheckoutPayment.tsx
│   │   │   │   └── 📄 CheckoutReview.tsx
│   │   │   ├── 📁 Delivery
│   │   │   │   ├── 📄 CancelModal.tsx
│   │   │   │   ├── 📄 DeliveryOrderCard.tsx
│   │   │   │   └── 📄 OtpModal.tsx
│   │   │   ├── 📁 Home
│   │   │   │   ├── 📄 AppPromoBanner.tsx
│   │   │   │   ├── 📄 Features.tsx
│   │   │   │   ├── 📄 Hero.tsx
│   │   │   │   ├── 📄 HomeCategories.tsx
│   │   │   │   ├── 📄 Newsletter.tsx
│   │   │   │   └── 📄 PopularProducts.tsx
│   │   │   ├── 📁 OrderTracking
│   │   │   │   ├── 📄 LiveMap.tsx
│   │   │   │   ├── 📄 OrderOTP.tsx
│   │   │   │   └── 📄 OrderTimeLine.tsx
│   │   │   ├── 📄 AddressCard.tsx
│   │   │   ├── 📄 AddressForm.tsx
│   │   │   ├── 📄 Banner.tsx
│   │   │   ├── 📄 CartSidebar.tsx
│   │   │   ├── 📄 FilterPanel.tsx
│   │   │   ├── 📄 Footer.tsx
│   │   │   ├── 📄 Loading.tsx
│   │   │   ├── 📄 Navbar.tsx
│   │   │   ├── 📄 ProductCard.tsx
│   │   │   └── 📄 ProtectedRoute.tsx
│   │   ├── 📁 config
│   │   │   └── 📄 api.ts
│   │   ├── 📁 context
│   │   │   ├── 📄 AuthContext.tsx
│   │   │   └── 📄 CartContext.tsx
│   │   ├── 📁 pages
│   │   │   ├── 📁 admin
│   │   │   │   ├── 📄 AdminDashboard.tsx
│   │   │   │   ├── 📄 AdminDeliveryPartners.tsx
│   │   │   │   ├── 📄 AdminLayout.tsx
│   │   │   │   ├── 📄 AdminOrders.tsx
│   │   │   │   ├── 📄 AdminProductForm.tsx
│   │   │   │   └── 📄 AdminProducts.tsx
│   │   │   ├── 📁 delivery
│   │   │   │   ├── 📄 DeliveryDashboard.tsx
│   │   │   │   ├── 📄 DeliveryLayout.tsx
│   │   │   │   └── 📄 DeliveryLogin.tsx
│   │   │   ├── 📄 Addresses.tsx
│   │   │   ├── 📄 AppLayout.tsx
│   │   │   ├── 📄 Checkout.tsx
│   │   │   ├── 📄 FlashDeals.tsx
│   │   │   ├── 📄 Home.tsx
│   │   │   ├── 📄 Login.tsx
│   │   │   ├── 📄 MyOrders.tsx
│   │   │   ├── 📄 OrderTracking.tsx
│   │   │   ├── 📄 ProductPage.tsx
│   │   │   ├── 📄 Products.tsx
│   │   │   └── 📄 SearchResults.tsx
│   │   ├── 📁 types
│   │   │   └── 📄 index.ts
│   │   ├── 📄 App.tsx
│   │   ├── 🎨 index.css
│   │   └── 📄 main.tsx
│   ├── ⚙️ .gitignore
│   ├── 📝 README.md
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── ⚙️ tsconfig.app.json
│   ├── ⚙️ tsconfig.json
│   ├── ⚙️ tsconfig.node.json
│   ├── ⚙️ vercel.json
│   └── 📄 vite.config.ts
├── 📁 doc
├── 📁 server
│   ├── 📁 config
│   │   ├── 📄 cloudinary.ts
│   │   ├── 📄 nodemailer.ts
│   │   └── 📄 prisma.ts
│   ├── 📁 controllers
│   │   ├── 📄 addressController.ts
│   │   ├── 📄 adminController.ts
│   │   ├── 📄 authController.ts
│   │   ├── 📄 deliveryPartnerController.ts
│   │   ├── 📄 orderController.ts
│   │   ├── 📄 productController.ts
│   │   └── 📄 webhooks.ts
│   ├── 📁 generated
│   │   └── 📁 prisma
│   │       ├── 📁 internal
│   │       │   ├── 📄 class.ts
│   │       │   ├── 📄 prismaNamespace.ts
│   │       │   └── 📄 prismaNamespaceBrowser.ts
│   │       ├── 📁 models
│   │       │   ├── 📄 Address.ts
│   │       │   ├── 📄 DeliveryPartner.ts
│   │       │   ├── 📄 Order.ts
│   │       │   ├── 📄 Product.ts
│   │       │   └── 📄 User.ts
│   │       ├── 📄 browser.ts
│   │       ├── 📄 client.ts
│   │       ├── 📄 commonInputTypes.ts
│   │       ├── 📄 enums.ts
│   │       └── 📄 models.ts
│   ├── 📁 inngest
│   │   └── 📄 index.ts
│   ├── 📁 middleware
│   │   ├── 📄 admin.ts
│   │   ├── 📄 auth.ts
│   │   └── 📄 deliveryAuth.ts
│   ├── 📁 prisma
│   │   └── 📄 schema.prisma
│   ├── 📁 routes
│   │   ├── 📄 addressRoutes.ts
│   │   ├── 📄 adminRoutes.ts
│   │   ├── 📄 authRoutes.ts
│   │   ├── 📄 deliveryPartnerRoutes.ts
│   │   ├── 📄 orderRoutes.ts
│   │   ├── 📄 productRoutes.ts
│   │   └── 📄 uploadRoutes.ts
│   ├── 📁 types
│   │   └── 📁 express
│   │       └── 📄 index.d.ts
│   ├── 📝 README.md
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── 📄 prisma.config.ts
│   ├── 📄 seed.ts
│   ├── 📄 server.ts
│   ├── ⚙️ tsconfig.json
│   └── ⚙️ vercel.json
├── ⚙️ .gitignore
└── 📝 README.md
```

---

_Generated by FileTree Pro Extension_

---

# 🎨 Frontend Features

# 🏠 Home Module

Includes:

- Hero Section
- Categories
- Promotional Banner
- Featured Products
- Newsletter Section

---

# 🛍️ Product System

Features:

- Product Listings
- Product Details
- Flash Deals
- Search Results
- Filtering System

---

# 🛒 Cart & Checkout

Includes:

- Cart Sidebar
- Checkout Review
- Payment Integration
- Address Selection

---

# 📦 Order Tracking

Features:

- Live Map Tracking
- Delivery Timeline
- OTP Verification

Uses:

- Leaflet
- React Leaflet

---

# 👨‍💼 Admin Dashboard

Includes:

- Dashboard Analytics
- Product Management
- Order Monitoring
- Delivery Management

---

# 🚚 Delivery Dashboard

Features:

- Delivery Login
- Assigned Orders
- OTP Delivery Verification
- Delivery Updates

---

# ⚡ Backend Features

# 🔐 Authentication System

- JWT Authentication
- Password Hashing using bcrypt
- Role-Based Access Control
- Protected APIs

---

# 🛒 Product Management APIs

- Create Products
- Update Products
- Delete Products
- Fetch Products
- Search Products

---

# 📦 Order Management

- Place Orders
- Track Orders
- Update Delivery Status
- Payment Verification

---

# ☁️ Cloudinary Integration

Used for:

- Product image uploads
- CDN optimization
- Image hosting

---

# ⚡ Inngest Event Workflows

Inngest is used for:

- Background processing
- Order events
- Email notifications
- Async workflows

---

# 💳 Stripe Payment System

Workflow:

```text
Checkout
   ↓
Stripe Session Created
   ↓
Payment Success
   ↓
Webhook Verification
   ↓
Order Confirmation
```

Webhook Endpoint:

```http
POST /api/stripe
```

---

# 🌐 API Modules

# Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

---

# Products

```http
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

---

# Orders

```http
POST /api/orders
GET  /api/orders
```

---

# Addresses

```http
GET    /api/addresses
POST   /api/addresses
PUT    /api/addresses/:id
DELETE /api/addresses/:id
```

---

# Admin

```http
GET /api/admin/dashboard
```

---

# Delivery

```http
POST /api/delivery/login
GET  /api/delivery/orders
```

---

# 🗄️ Database Design

The backend uses:

- PostgreSQL (Neon)
- Prisma ORM

Core Models:

- User
- Product
- Order
- Address
- DeliveryPartner

---

# 🔒 Authentication Flow

```text
User Login/Register
        ↓
JWT Token Generated
        ↓
Client Stores Token
        ↓
Protected APIs Accessed
```

---

# ⚙️ Environment Variables

# Frontend `.env`

```env
VITE_CURRENCY_SYMBOL="$"
VITE_BASE_URL="http://localhost:5000/api"
```

---

# Backend `.env`

```env
# JWT
JWT_SECRET=your_secret_key

# Admin Emails
ADMIN_EMAILS=admin@example.com

# Database
DATABASE_URL=postgresql://...

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Inngest
INNGEST_EVENT_KEY=your_event_key
INNGEST_SIGNING_KEY=your_signing_key

# SMTP
SENDER_EMAIL=your_email
SMTP_USER=your_user
SMTP_PASS=your_password

# Stripe
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

---

# 🛠️ Installation Guide

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/full-stack-grocery-delivery.git
```

---

# 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

# 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 4️⃣ Configure Environment Variables

Create `.env` files inside:

```text
client/.env
server/.env
```

---

# 5️⃣ Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Push Database Schema:

```bash
npx prisma db push
```

Seed Database:

```bash
npm run seed
```

---

# 6️⃣ Run Backend Server

```bash
npm run server
```

Backend URL:

```text
http://localhost:5000
```

---

# 7️⃣ Run Frontend

```bash
cd client
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# 🧪 Testing

Recommended Tools:

- Postman
- Thunder Client
- Insomnia

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected Routes
- Role-Based Authorization
- Stripe Webhook Verification

---

# ⚡ Performance Features

- Vite Fast Refresh
- Optimized API Structure
- Modular Backend Architecture
- Efficient State Management

---

# 📱 Responsive Design

The frontend is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile Devices

---

# ☁️ Deployment

# Frontend

Recommended:

- Vercel
- Netlify

---

# Backend

Recommended:

- Railway
- Render
- VPS
- Docker

---

# 🧱 Scalability Features

- Modular Architecture
- Event-Driven Processing
- TypeScript Support
- Cloud-Based Infrastructure

---

# 🚀 Future Improvements

Potential future enhancements:

- Real-Time Socket.IO Tracking
- Redis Caching
- Docker Support
- Kubernetes Deployment
- AI Product Recommendations
- Push Notifications
- PWA Support
- Dark Mode
- Wishlist System

---

# 📚 Academic Significance

This project demonstrates:

- Full-Stack Web Development
- REST API Design
- Authentication Systems
- Database Management
- Cloud Computing
- Event-Driven Architecture
- Payment Gateway Integration
- Software Engineering Principles

---

# 👨‍💻 Author

## Satinder Singh Sall

Full-Stack Developer

---

# 📄 License

MIT License

---

# ⭐ Acknowledgements

Special thanks to:

- React Team
- Prisma Team
- Stripe
- Cloudinary
- Inngest
- PostgreSQL
- Tailwind CSS
- Open Source Community

---

# Full-Stack Grocery Delivery Platform

## 🛒 Full-Stack Grocery Delivery Platform

A modern, scalable, and production-ready **Full-Stack Grocery Delivery Application** built using **React, TypeScript, Node.js, Express, Prisma, PostgreSQL, and Inngest**.

This platform provides a complete online grocery ecosystem including:

- Customer shopping experience
- Secure authentication
- Real-time order management
- Delivery partner dashboard
- Admin management system
- Stripe payment integration
- Email notifications
- Cloud image uploads
- Live order tracking

---

# 📌 Project Overview

The application is designed to simulate a real-world grocery delivery service similar to:

- Instacart
- Blinkit
- Zepto
- BigBasket
- Swiggy Instamart

The system follows a modern **client-server architecture** with separate frontend and backend applications.

---

# 🏗️ System Architecture

```text
Client (React + Vite)
        ↓
REST API (Express.js)
        ↓
Prisma ORM
        ↓
PostgreSQL Database (Neon)
```

Additional Services:

- Stripe → Payments
- Cloudinary → Image Hosting
- Inngest → Background Jobs & Event Processing
- Nodemailer/Brevo → Email Service

---

# 🚀 Features

## 👤 Customer Features

- User Authentication (JWT)
- Browse Products
- Search & Filter Products
- Shopping Cart
- Address Management
- Checkout Workflow
- Stripe Payment Integration
- Order Tracking
- Live Delivery Status
- OTP Verification
- Order History

---

## 🛠️ Admin Features

- Admin Dashboard
- Product Management
- Add/Edit/Delete Products
- Order Management
- Delivery Partner Management
- Sales Monitoring

---

## 🚚 Delivery Partner Features

- Delivery Partner Login
- Delivery Dashboard
- Accept/Reject Orders
- OTP Order Verification
- Delivery Status Updates

---

# 🧩 Tech Stack

## Frontend

| Technology              | Purpose         |
| ----------------------- | --------------- |
| React 19                | UI Framework    |
| TypeScript              | Type Safety     |
| Vite                    | Build Tool      |
| Tailwind CSS            | Styling         |
| React Router DOM        | Routing         |
| Axios                   | API Requests    |
| React Hot Toast         | Notifications   |
| Leaflet + React Leaflet | Maps & Tracking |

---

## Backend

| Technology        | Purpose          |
| ----------------- | ---------------- |
| Node.js           | Runtime          |
| Express.js        | API Server       |
| Prisma ORM        | Database ORM     |
| PostgreSQL (Neon) | Database         |
| JWT               | Authentication   |
| bcrypt            | Password Hashing |
| Multer            | File Upload      |
| Cloudinary        | Image Hosting    |
| Stripe            | Payments         |
| Inngest           | Background Jobs  |
| Nodemailer        | Emails           |

---

# 📂 Project Structure

```text
Full-Stack Grocery Delivery - Demo/
│
├── client/                 # Frontend Application
├── server/                 # Backend Application
├── doc/                    # Documentation
│
├── client/src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── assets/
│   └── config/
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── prisma/
│   ├── config/
│   ├── inngest/
│   └── generated/
```

# File Tree: Full-Stack Grocery Delivery - Demo

**Generated:** 5/13/2026, 7:24:45 PM
**Root Path:** `e:\My Projects\Full-Stack Grocery Delivery - Demo`

```
├── 📁 client
│   ├── 📁 public
│   │   └── 🖼️ favicon.svg
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   │   ├── 📄 DummyReviewsSection.tsx
│   │   │   ├── 📄 assets.ts
│   │   │   ├── 🖼️ baby_care.png
│   │   │   ├── 🖼️ bakery.png
│   │   │   ├── 🖼️ dairy_eggs.png
│   │   │   ├── 🖼️ delivery_truck.svg
│   │   │   ├── 🖼️ drinks.png
│   │   │   ├── 🖼️ frozen_foods.png
│   │   │   ├── 🖼️ fruits_vegetables.png
│   │   │   ├── 🖼️ hero_bg.jpeg
│   │   │   ├── 🖼️ meat_seafood.png
│   │   │   ├── 🖼️ pantry_staples.png
│   │   │   ├── 🖼️ personal_care.png
│   │   │   ├── 🖼️ snacks.png
│   │   │   └── 🖼️ unnamed.jpg
│   │   ├── 📁 components
│   │   │   ├── 📁 Checkout
│   │   │   │   ├── 📄 CheckoutAddress.tsx
│   │   │   │   ├── 📄 CheckoutPayment.tsx
│   │   │   │   └── 📄 CheckoutReview.tsx
│   │   │   ├── 📁 Delivery
│   │   │   │   ├── 📄 CancelModal.tsx
│   │   │   │   ├── 📄 DeliveryOrderCard.tsx
│   │   │   │   └── 📄 OtpModal.tsx
│   │   │   ├── 📁 Home
│   │   │   │   ├── 📄 AppPromoBanner.tsx
│   │   │   │   ├── 📄 Features.tsx
│   │   │   │   ├── 📄 Hero.tsx
│   │   │   │   ├── 📄 HomeCategories.tsx
│   │   │   │   ├── 📄 Newsletter.tsx
│   │   │   │   └── 📄 PopularProducts.tsx
│   │   │   ├── 📁 OrderTracking
│   │   │   │   ├── 📄 LiveMap.tsx
│   │   │   │   ├── 📄 OrderOTP.tsx
│   │   │   │   └── 📄 OrderTimeLine.tsx
│   │   │   ├── 📄 AddressCard.tsx
│   │   │   ├── 📄 AddressForm.tsx
│   │   │   ├── 📄 Banner.tsx
│   │   │   ├── 📄 CartSidebar.tsx
│   │   │   ├── 📄 FilterPanel.tsx
│   │   │   ├── 📄 Footer.tsx
│   │   │   ├── 📄 Loading.tsx
│   │   │   ├── 📄 Navbar.tsx
│   │   │   ├── 📄 ProductCard.tsx
│   │   │   └── 📄 ProtectedRoute.tsx
│   │   ├── 📁 config
│   │   │   └── 📄 api.ts
│   │   ├── 📁 context
│   │   │   ├── 📄 AuthContext.tsx
│   │   │   └── 📄 CartContext.tsx
│   │   ├── 📁 pages
│   │   │   ├── 📁 admin
│   │   │   │   ├── 📄 AdminDashboard.tsx
│   │   │   │   ├── 📄 AdminDeliveryPartners.tsx
│   │   │   │   ├── 📄 AdminLayout.tsx
│   │   │   │   ├── 📄 AdminOrders.tsx
│   │   │   │   ├── 📄 AdminProductForm.tsx
│   │   │   │   └── 📄 AdminProducts.tsx
│   │   │   ├── 📁 delivery
│   │   │   │   ├── 📄 DeliveryDashboard.tsx
│   │   │   │   ├── 📄 DeliveryLayout.tsx
│   │   │   │   └── 📄 DeliveryLogin.tsx
│   │   │   ├── 📄 Addresses.tsx
│   │   │   ├── 📄 AppLayout.tsx
│   │   │   ├── 📄 Checkout.tsx
│   │   │   ├── 📄 FlashDeals.tsx
│   │   │   ├── 📄 Home.tsx
│   │   │   ├── 📄 Login.tsx
│   │   │   ├── 📄 MyOrders.tsx
│   │   │   ├── 📄 OrderTracking.tsx
│   │   │   ├── 📄 ProductPage.tsx
│   │   │   ├── 📄 Products.tsx
│   │   │   └── 📄 SearchResults.tsx
│   │   ├── 📁 types
│   │   │   └── 📄 index.ts
│   │   ├── 📄 App.tsx
│   │   ├── 🎨 index.css
│   │   └── 📄 main.tsx
│   ├── ⚙️ .gitignore
│   ├── 📝 README.md
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── ⚙️ tsconfig.app.json
│   ├── ⚙️ tsconfig.json
│   ├── ⚙️ tsconfig.node.json
│   ├── ⚙️ vercel.json
│   └── 📄 vite.config.ts
├── 📁 doc
├── 📁 server
│   ├── 📁 config
│   │   ├── 📄 cloudinary.ts
│   │   ├── 📄 nodemailer.ts
│   │   └── 📄 prisma.ts
│   ├── 📁 controllers
│   │   ├── 📄 addressController.ts
│   │   ├── 📄 adminController.ts
│   │   ├── 📄 authController.ts
│   │   ├── 📄 deliveryPartnerController.ts
│   │   ├── 📄 orderController.ts
│   │   ├── 📄 productController.ts
│   │   └── 📄 webhooks.ts
│   ├── 📁 generated
│   │   └── 📁 prisma
│   │       ├── 📁 internal
│   │       │   ├── 📄 class.ts
│   │       │   ├── 📄 prismaNamespace.ts
│   │       │   └── 📄 prismaNamespaceBrowser.ts
│   │       ├── 📁 models
│   │       │   ├── 📄 Address.ts
│   │       │   ├── 📄 DeliveryPartner.ts
│   │       │   ├── 📄 Order.ts
│   │       │   ├── 📄 Product.ts
│   │       │   └── 📄 User.ts
│   │       ├── 📄 browser.ts
│   │       ├── 📄 client.ts
│   │       ├── 📄 commonInputTypes.ts
│   │       ├── 📄 enums.ts
│   │       └── 📄 models.ts
│   ├── 📁 inngest
│   │   └── 📄 index.ts
│   ├── 📁 middleware
│   │   ├── 📄 admin.ts
│   │   ├── 📄 auth.ts
│   │   └── 📄 deliveryAuth.ts
│   ├── 📁 prisma
│   │   └── 📄 schema.prisma
│   ├── 📁 routes
│   │   ├── 📄 addressRoutes.ts
│   │   ├── 📄 adminRoutes.ts
│   │   ├── 📄 authRoutes.ts
│   │   ├── 📄 deliveryPartnerRoutes.ts
│   │   ├── 📄 orderRoutes.ts
│   │   ├── 📄 productRoutes.ts
│   │   └── 📄 uploadRoutes.ts
│   ├── 📁 types
│   │   └── 📁 express
│   │       └── 📄 index.d.ts
│   ├── 📝 README.md
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── 📄 prisma.config.ts
│   ├── 📄 seed.ts
│   ├── 📄 server.ts
│   ├── ⚙️ tsconfig.json
│   └── ⚙️ vercel.json
├── ⚙️ .gitignore
└── 📝 README.md
```

---

_Generated by FileTree Pro Extension_

---

# 🔐 Authentication System

The platform uses **JWT-based authentication**.

Features include:

- Secure login/signup
- Password hashing using bcrypt
- Protected routes
- Admin middleware
- Delivery partner authentication

---

# 💳 Payment Integration

Stripe is used for secure payment processing.

Supported flow:

1. User places order
2. Checkout initiated
3. Stripe payment session created
4. Webhook verifies payment
5. Order status updated

---

# 🗄️ Database Design

The backend uses **PostgreSQL** with **Prisma ORM**.

Core entities include:

- User
- Product
- Order
- Address
- DeliveryPartner

---

# ☁️ Cloudinary Integration

Cloudinary is used for:

- Product image upload
- Image optimization
- CDN delivery

---

# ⚡ Inngest Background Jobs

Inngest handles:

- Event-driven workflows
- Background processing
- Email automation
- Order notifications

---

# 🗺️ Live Order Tracking

The platform includes live tracking using:

- Leaflet Maps
- React Leaflet
- Delivery timeline UI

---

# 📧 Email Notifications

Email services are implemented using:

- Nodemailer
- SMTP/Brevo

Notifications include:

- Order confirmation
- Delivery updates
- OTP verification

---

# 🛠️ Installation Guide

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/full-stack-grocery-delivery.git
```

---

# 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

# 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 4️⃣ Configure Environment Variables

Create `.env` inside the `server` folder.

```env
JWT_SECRET=your_secret

DATABASE_URL=your_database_url

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

INNGEST_EVENT_KEY=your_event_key
INNGEST_SIGNING_KEY=your_signing_key

STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

SMTP_USER=your_email
SMTP_PASS=your_password
```

---

# 5️⃣ Prisma Setup

Generate Prisma client:

```bash
npx prisma generate
```

Push schema to database:

```bash
npx prisma db push
```

Seed database:

```bash
npm run seed
```

---

# 6️⃣ Start Development Servers

## Backend

```bash
npm run server
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🌐 API Modules

## Authentication Routes

- `/api/auth/login`
- `/api/auth/register`

---

## Product Routes

- `/api/products`
- `/api/products/:id`

---

## Order Routes

- `/api/orders`

---

## Address Routes

- `/api/address`

---

# 📸 Screens Included

The application contains:

- Home Page
- Product Listing
- Product Details
- Checkout System
- Cart Sidebar
- Admin Dashboard
- Delivery Dashboard
- Live Tracking Map

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected APIs
- Role-Based Authorization
- Secure Payment Webhooks

---

# 📈 Scalability

The project architecture supports:

- Modular backend structure
- Event-driven processing
- Cloud deployment
- Horizontal scalability

---

# 🚀 Deployment

## Frontend

Recommended:

- Vercel
- Netlify

## Backend

Recommended:

- Railway
- Render
- VPS
- Docker

---

# 🧪 Future Improvements

Potential future enhancements:

- Real-time socket updates
- AI-based recommendations
- Push notifications
- Multi-vendor support
- Mobile application
- Inventory analytics

---

# 📚 Academic Significance

This project demonstrates concepts from:

- Full-Stack Web Development
- REST API Design
- Authentication Systems
- Database Management
- Cloud Computing
- Event-Driven Architecture
- Payment Gateway Integration
- Software Engineering Principles

---

# 👨‍💻 Author

## Satinder Singh Sall

Full-Stack Developer

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Acknowledgements

Special thanks to:

- React Team
- Prisma Team
- Stripe
- Inngest
- Cloudinary
- Open Source Community
