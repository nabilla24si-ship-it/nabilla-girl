export default function Loading() {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
            <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-rose-600 font-medium tracking-wide">Menyediakan ruang kecantikan anda...</p>
        </div>
    );
}