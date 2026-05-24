import Card from "./Card";
import Button from "./Button";

export default function ProductCard({ image, title, category, price, description }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden !p-0 group hover:shadow-md transition-all">
      <div className="overflow-hidden h-48 bg-gray-100 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-rose-600 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          {category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-gray-800 line-clamp-1 mb-1">
            {title}
          </h2>
          <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <h3 className="text-base font-extrabold text-emerald-600">
            {price}
          </h3>
          <Button type="rose" className="!py-1.5 !px-3 !text-xs">
            Detail
          </Button>
        </div>
      </div>
    </Card>
  );
}