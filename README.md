# MENV Commerce App

## 🛒 Overview
The **MENV Commerce App** is a full-stack e-commerce application built using **MongoDB**, **Express**, **Node.js**, and **Vue.js**. The application allows users to browse products through a clean, responsive user interface, while product data is served via a secure RESTful API connected to a MongoDB database.

---

## 📁 Project Structure

```
menv-commerce-app/
├── client/               # Vue.js frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/       # Static assets (images, logos, styles)
│   │   ├── components/   # Reusable UI components (e.g., Navbar, ProductCard)
│   │   ├── pages/        # LandingPage.vue, ProductsPage.vue
│   │   ├── App.vue       # Root component
│   │   └── main.js       # Vue app entry point
│   └── .env              # API base URL
│
├── server/               # Node.js backend
│   ├── config/           # Mongoose connection config
<< features/backend
|   ├── seed/             # seed product for mongodb (e.g., seedproduct.js)
=======
>>>> main
│   ├── controllers/      # Business logic (e.g., productController.js)
│   ├── models/           # MongoDB models (e.g., productModel.js)
│   ├── routes/           # Express routes (e.g., productRoutes.js)
│   ├── .env              # Server environment variables
│   └── server.js         # Entry point for Express server
│
├── .gitignore
└── README.md
```

---

## 🚀 Features

- Modern and responsive **Landing Page** built with Vue.js
- **Products Page** that fetches and displays a list of products via Axios
- **RESTful API** built with Express and MongoDB
- MVC backend structure for clean and maintainable code
- Secure environment variables via `.env` files
- GitHub collaboration-ready setup for multi-developer teams

---

## 🔧 Getting Started

### ✅ Prerequisites

- Node.js and npm
- MongoDB installed locally or MongoDB Atlas account
- Vue CLI installed globally:
  ```bash
  npm install -g @vue/cli
  ```

---

## 🔌 Backend Setup (`server/`)

1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/menv-commerce
   SEED=true
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

---

## 💻 Frontend Setup (`client/`)

1. Navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   VUE_APP_API=http://localhost:5000/api
   ```
4. Start the frontend server:
   ```bash
   npm run serve
   ```

---

## 🧭 Frontend Page Overview

### 🏠 Landing Page

- Introduces the store or brand
- Includes a welcome banner, featured products, and a call-to-action
- Uses reusable components like a navbar and hero section

### 📦 Products Page

- Dynamically fetches product data from the Express API
- Displays products in a responsive grid layout
- Each product card includes an image, name, description, and price
- Can be extended to include filtering, sorting, or pagination

---

## 🧠 Technologies Used

### Frontend
- Vue.js (CLI)
- Axios for API requests
- Vue Router (optional for navigation)
- Vue CLI environment variables

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS & dotenv

---

## 📂 GitHub Collaboration Guidelines

- Use branches for all features: `feature/<feature-name>`
- Submit PRs with clear descriptions
- Assign at least one reviewer per PR
- Use GitHub Projects or Issues to track work

---

## 👥 Contributors

- [Mark Velasquez](https://github.com/MCVelasquez45)
- [Nichole Harrison](https://github.com/nicholeharrison1985)
- [Justin Breazeale](https://github.com/JustinBreazeale)
- [Hunter Motko](https://github.com/hunterMotko)
- [Wayne Beckom](https://github.com/beckomw)
---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---
