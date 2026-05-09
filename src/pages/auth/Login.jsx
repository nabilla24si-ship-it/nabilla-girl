import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  const navigate = useNavigate();
  
  // State Management
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "", 
    password: "",
  });

  // Handle perubahan input
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Proses Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(""); // Reset error setiap kali mulai submit

    axios
      .post("https://dummyjson.com/auth/login", {
        username: dataForm.email, // Menggunakan data email sebagai username sesuai DummyJSON
        password: dataForm.password,
      })
      .then((response) => {
        // Jika berhasil, arahkan ke Dashboard
        if (response.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        // Tangkap pesan error dari API
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Komponen Notifikasi Error & Loading (Sesuai Modul Persis)
  const errorInfo = error ? (
      <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
          <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
          {error}
      </div>
  ) : null;

  const loadingInfo = loading ? (
      <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
          <ImSpinner2 className="me-2 animate-spin" />
          Mohon Tunggu...
      </div>
  ) : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-rose-100">
        
        {/* Header Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Lumière <b className="text-rose-500">.</b>
          </h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">Beauty Clinic</p>
        </div>

        {/* Tampilkan pesan Error atau Loading di sini */}
        {errorInfo}
        {loadingInfo}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all"
              placeholder="emilys"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition-all"
              placeholder="emilyspass"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading} // Tombol mati saat loading
            className="w-full bg-rose-500 hover:bg-rose-600 disabled:bg-rose-300 text-white font-bold py-4 rounded-xl transition-colors mt-4 flex justify-center items-center"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-8">
          © 2026 Nabilla Suharman
        </p>
      </div>
    </div>
  );
}