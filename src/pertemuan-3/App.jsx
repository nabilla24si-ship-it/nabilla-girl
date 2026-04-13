 import { useState } from "react";
import { InputField, SelectField } from "./components/FormInput";

export default function App() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    ipk: "",
    prodi: "",
    semester: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => {
    let errorMsg = "";
    if (name === "nama") {
      if (!value) errorMsg = "Nama wajib diisi";
      else if (/\d/.test(value)) errorMsg = "Nama tidak boleh mengandung angka";
      else if (value.length < 3) errorMsg = "Minimal 3 karakter";
    }
    if (name === "email") {
      if (!value) errorMsg = "Email wajib diisi";
      else if (!value.includes("@")) errorMsg = "Harus format email (@)";
      else if (!value.endsWith(".ac.id")) errorMsg = "Harus email institusi (.ac.id)";
    }
    if (name === "ipk") {
      if (!value) errorMsg = "IPK wajib diisi";
      else if (isNaN(value)) errorMsg = "Harus berupa angka";
      else if (value < 0 || value > 4) errorMsg = "Rentang IPK 0.0 - 4.0";
    }
    if ((name === "prodi" || name === "semester") && !value) {
      errorMsg = "Pilihan ini wajib diisi";
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
    setSubmitted(false);
  };

  const isValid = 
    formData.nama && formData.email && formData.ipk && formData.prodi && formData.semester &&
    !errors.nama && !errors.email && !errors.ipk && !errors.prodi && !errors.semester;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border-t-4 border-blue-600">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Form Beasiswa</h2>
        <p className="text-center text-gray-500 mb-6 text-sm">Silahkan isi data akademik Anda</p>

        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <InputField label="Nama Lengkap" name="nama" type="text" value={formData.nama} onChange={handleChange} error={errors.nama} placeholder="Masukkan Nama..." />
          <InputField label="Email Kampus" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="example@univ.ac.id" />
          <InputField label="IPK Terakhir" name="ipk" type="text" value={formData.ipk} onChange={handleChange} error={errors.ipk} placeholder="Contoh: 3.85" />
          
          <SelectField label="Program Studi" name="prodi" value={formData.prodi} onChange={handleChange} error={errors.prodi} options={["Informatika", "Sistem Informasi", "Teknik Mesin"]} />
          
          {/* Bagian yang diupdate */}
          <SelectField label="Semester" name="semester" value={formData.semester} onChange={handleChange} error={errors.semester} options={["1", "2", "3", "4", "5", "6", "7", "8"]} />

          {isValid && (
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-200 mt-4">
              Kirim Pendaftaran
            </button>
          )}
        </form>

        {submitted && (
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded text-blue-800">
            <h3 className="font-bold text-lg">✅ Data Diterima</h3>
            <p className="text-sm">Mahasiswa <strong>{formData.nama}</strong> ({formData.prodi}) semester {formData.semester} dengan IPK {formData.ipk} telah terdaftar.</p>
          </div>
        )}
      </div>
    </div>
  );
}