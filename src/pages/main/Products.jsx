import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";

export default function Products() {
    // Generate 30 Data Produk
    const productsData = Array.from({ length: 30 }).map((_, i) => ({
        id: i + 1,
        title: ["Facial Treatment", "Laser Glow", "Skin Booster", "Acne Care"][i % 4] + ` Pack ${i + 1}`,
        code: `LMR-${100 + i}`,
        category: i % 2 === 0 ? "Treatment" : "Skincare",
        brand: "Lumière Aesthetic",
        price: (Math.floor(Math.random() * 500) + 100) * 1000,
        stock: Math.floor(Math.random() * 50) + 10
    }));

    return (
        <div className="p-6">
            <PageHeader title="Product List" breadcrumb="Products">
                <button className="bg-rose-500 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-rose-600">
                    + Add Product
                </button>
            </PageHeader>

            <div className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden mt-6">
                <table className="w-full text-left">
                    <thead className="bg-rose-50">
                        <tr className="text-rose-900">
                            <th className="p-4 font-semibold">Code</th>
                            <th className="p-4 font-semibold">Title</th>
                            <th className="p-4 font-semibold">Category</th>
                            <th className="p-4 font-semibold">Price</th>
                            <th className="p-4 font-semibold">Stock</th>
                            <th className="p-4 font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {productsData.map((item) => (
                            <tr key={item.id} className="hover:bg-rose-50/30 transition-colors">
                                <td className="p-4 font-medium text-gray-500">{item.code}</td>
                                <td className="p-4">
                                    {/* LINK MENUJU DETAIL */}
                                    <Link 
                                        to={`/products/${item.id}`} 
                                        className="font-bold text-rose-500 hover:text-rose-700"
                                    >
                                        {item.title}
                                    </Link>
                                </td>
                                <td className="p-4 text-gray-600">{item.category}</td>
                                <td className="p-4 font-bold text-gray-800">
                                    Rp {item.price.toLocaleString("id-ID")}
                                </td>
                                <td className="p-4 text-gray-600">{item.stock} pcs</td>
                                <td className="p-4">
                                    <Link 
                                        to={`/products/${item.id}`}
                                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-lg hover:bg-rose-500 hover:text-white transition"
                                    >
                                        View Detail
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}