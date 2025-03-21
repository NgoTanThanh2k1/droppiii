import { useState } from "react";
import { Heart } from "lucide-react";
import Bg from "../assets/bgtest.png";
import FS from "../assets/flashsale.png";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
export default function ProductList() {
  const navigate = useNavigate();

  const products = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Sản phẩm ${index + 1}`,
    price: Math.floor(Math.random() * 1000000) + 100000,
    discount: 50,
    buy: Math.floor(Math.random() * 5) + 1,
    image: index % 2 === 0 ? Bg : FS,
  }));

  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Ngăn sự kiện click vào sản phẩm
    console.log(`Đã thêm sản phẩm ${product.name} vào giỏ hàng!`);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10 px-4">
      <h2 className="text-xl font-semibold text-center mb-6">
        Danh sách sản phẩm
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product.id)}
            className="cursor-pointer"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-40 hover:shadow-lg transition duration-300 flex flex-col">
              {/* Phần ảnh sản phẩm */}
              <div className="relative w-full h-40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Giảm giá */}
                <div className="absolute top-0 left-0 bg-red-500 text-white text-[8px] font-bold px-2 py-1 rounded-br-md opacity-80 backdrop-blur-sm flex items-center justify-center">
                  -{product.discount}%
                </div>

                {/* Icon yêu thích */}
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow opacity-90 flex items-center justify-center">
                  <Heart size={12} className="text-gray-600" />
                </div>

                {/* FREE và Quà tặng */}
                <div className="absolute bottom-0 left-0 flex items-center">
                  <span className="bg-green-500 text-white font-semibold h-4 min-w-[48px] px-2 py-1 text-[8px]">
                    FREE
                  </span>
                  <span className="bg-yellow-500 text-white h-4 min-w-[60px] px-2 py-1 text-[8px] ml-1">
                    Quà tặng
                  </span>
                </div>
              </div>

              {/* Nội dung sản phẩm */}
              <div className="p-2 flex flex-col justify-between flex-grow">
                <h3 className="text-xs font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-red-500 font-bold mb-2">
                  {product.price.toLocaleString()}đ
                </p>

                {/* Nút Thêm vào giỏ hàng */}
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-lg transition"
                >
                <ShoppingCartIcon className="w-2 h-2" />
                   Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nút Load More */}
      {visibleCount < products.length && (
  <div className="flex justify-center mt-8">
    <button
      onClick={handleLoadMore}
      className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
    >
      Xem thêm
    </button>
  </div>
)}

{visibleCount >= products.length && visibleCount > 12 && (
  <div className="flex justify-center mt-8">
    <button
      onClick={() => setVisibleCount(12)}
      className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-full transition duration-300"
    >
      Thu gọn
    </button>
  </div>
)}
    </div>
  );
}
