import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Create Your Account ✨
            </h2>

            <form>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-rose-400 outline-none"
                        placeholder="you@example.com"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-rose-400 outline-none"
                        placeholder="********"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-rose-400 outline-none"
                        placeholder="********"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                    Register
                </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account? <Link to="/login" className="text-rose-500 font-bold hover:underline">Login</Link>
            </p>
        </div>
    );
}