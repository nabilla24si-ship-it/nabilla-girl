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
import Products from "./pages/main/Products"; 
import Components from "./pages/main/Components"; // ◄ Pastikan huruf "C" di file ini kapital!
import NotFound from "./pages/main/NotFound";

const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

export default function App() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-rose-500 font-semibold">Loading...</div>}>
      <Routes>
        {/* ================= ROUTE AUTH ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* ================= ROUTE ADMIN / MAIN ================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/products" element={<Products />} />
          
          {/* Jalur Khusus Katalog Komponen Praktikum */}
          <Route path="/components" element={<Components />} /> 
          
          {/* Route Detail Produk */}
          <Route path="/products/:id" element={<ProductDetail />} />
          
          {/* Error Pages Testing */}
          <Route path="/error-400" element={<NotFound code="400" message="Bad Request." />} />
          <Route path="/error-401" element={<NotFound code="401" message="Unauthorized." />} />
          <Route path="/error-403" element={<NotFound code="403" message="Forbidden." />} />
        </Route>

        {/* ================= CATCH-ALL GLOBAL 404 ================= */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}