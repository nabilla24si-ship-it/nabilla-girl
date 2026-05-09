import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Pages - Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

// Pages - Main
import Dashboard from "./pages/main/Dashboard";
import Appointments from "./pages/main/Orders"; 
import Patients from "./pages/main/Customers";  
import Products from "./pages/main/Products"; // Halaman List Produk
import NotFound from "./pages/main/NotFound";

// 1️⃣ Import ProductDetail sesuai modul (di folder pages) menggunakan lazy load
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

export default function App() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <Routes>
        {/* Route Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Route Admin */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/products" element={<Products />} />
          
          {/* 2️⃣ Route untuk Detail Produk */}
          <Route path="/products/:id" element={<ProductDetail />} />
          
          {/* Error Pages */}
          <Route path="/error-400" element={<NotFound code="400" message="Bad Request." />} />
          <Route path="/error-401" element={<NotFound code="401" message="Unauthorized." />} />
          <Route path="/error-403" element={<NotFound code="403" message="Forbidden." />} />
        </Route>

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}