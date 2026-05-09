import { FaCalendarCheck, FaUserCheck, FaTimesCircle, FaMoneyBillWave, FaUserFriends } from "react-icons/fa";

export default function Dashboard() {
    const patients = [
        { id: "#AP-001", name: "Nabilla Suharman", treatment: "Acne Laser Treatment", status: "Completed" },
        { id: "#AP-002", name: "Andi Wijaya", treatment: "Deep Cleansing Facial", status: "Scheduled" },
        { id: "#AP-003", name: "Siti Aminah", treatment: "Chemical Peeling", status: "Canceled" },
    ];

    return (
        <div id="dashboard-container">
            <div id="dashboard-grid" className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-50 flex items-center gap-4">
                    <div className="p-4 bg-rose-100 text-rose-500 rounded-xl text-2xl"><FaCalendarCheck /></div>
                    <div>
                        <span className="block text-2xl font-bold">75</span>
                        <span className="text-sm text-gray-500">Total Appointments</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-50 flex items-center gap-4">
                    <div className="p-4 bg-green-100 text-green-500 rounded-xl text-2xl"><FaUserCheck /></div>
                    <div>
                        <span className="block text-2xl font-bold">175</span>
                        <span className="text-sm text-gray-500">Treated Patients</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-50 flex items-center gap-4">
                    <div className="p-4 bg-red-100 text-red-500 rounded-xl text-2xl"><FaTimesCircle /></div>
                    <div>
                        <span className="block text-2xl font-bold">40</span>
                        <span className="text-sm text-gray-500">Canceled</span>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-50 flex items-center gap-4">
                    <div className="p-4 bg-blue-100 text-blue-500 rounded-xl text-2xl"><FaMoneyBillWave /></div>
                    <div>
                        <span className="block text-2xl font-bold">Rp. 12.8M</span>
                        <span className="text-sm text-gray-500">Total Revenue</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-50">
                <div className="flex items-center gap-2 mb-6">
                    <FaUserFriends className="text-rose-500 text-xl" />
                    <h3 className="text-xl font-bold">Recent Appointments</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-50">
                                <th className="pb-4 font-medium">Patient Name</th>
                                <th className="pb-4 font-medium">Appt ID</th>
                                <th className="pb-4 font-medium">Treatment</th>
                                <th className="pb-4 font-medium">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {patients.map((p, i) => (
                                <tr key={i} className="hover:bg-rose-50/50 transition-colors">
                                    <td className="py-4 font-semibold text-gray-800">{p.name}</td>
                                    <td className="py-4 text-gray-500">{p.id}</td>
                                    <td className="py-4 text-gray-500">{p.treatment}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            p.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                                            p.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                                        }`}>
                                            {p.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}