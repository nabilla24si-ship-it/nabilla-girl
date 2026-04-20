import { Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <Header />
        <div className="mt-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            
            {/* Latihan: Error Pages */}
            <Route path="/error-400" element={<NotFound code="400" message="Bad Request: Permintaan tidak dapat diproses." />} />
            <Route path="/error-401" element={<NotFound code="401" message="Unauthorized: Silahkan login kembali." />} />
            <Route path="/error-403" element={<NotFound code="403" message="Forbidden: Anda tidak diizinkan mengakses halaman ini." />} />
            
            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}