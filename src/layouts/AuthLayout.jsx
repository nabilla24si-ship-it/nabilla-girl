import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-rose-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-rose-100">
                <div className="flex flex-col items-center justify-center mb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        <span className="text-rose-400">Lumière</span>
                        <span className="text-rose-600">.</span>
                    </h1>
                    <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">Aesthetic Clinic</p>
                </div>

                {/* Halaman Login/Register akan muncul di sini */}
                <Outlet />

                <p className="text-center text-xs text-gray-400 mt-8">
                    &copy; 2026 Lumière Beauty Clinic. Hak Cipta Terpelihara.
                </p>
            </div>
        </div>
    );
}