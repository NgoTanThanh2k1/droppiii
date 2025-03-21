import { useState } from "react";
import { Heart } from "lucide-react"; // icon yêu thích
import Bg from "../assets/bgtest.png"; // hình demo
import FS from "../assets/flashsale.png"; // hình flash sale demo
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();

  // Fake data sản phẩm
  const products = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Sản phẩm ${index + 1}`,
    price: Math.floor(Math.random() * 1000000) + 100000,
    discount: 50, // phần trăm giảm giá
    buy: Math.floor(Math.random() * 5) + 1,
    image: index % 2 === 0 ? Bg : FS, // xen kẽ hình ảnh
  }));

  const [visibleCount, setVisibleCount] = useState(12);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
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
            <div className="bg-white rounded-xl shadow-md overflow-hidden w-40 hover:shadow-lg transition duration-300">
              {/* Phần ảnh sản phẩm + các badge */}
              <div className="relative w-full h-40">
                {/* Ảnh sản phẩm */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Giảm giá */}
                <div className="font-primary absolute top-0 left-0 bg-red-500 text-white text-[8px] font-bold px-2 py-1 min-w-[30px] min-h-[15px]  rounded-br-md opacity-80 backdrop-blur-sm flex items-center justify-center">
                  -{product.discount}%
                </div>

                {/* Icon yêu thích */}
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow opacity-90 flex items-center justify-center">
                  <Heart size={12} className="text-gray-600" />
                </div>

                {/* FREE và Quà tặng - góc trái dưới ảnh */}
                <div className="absolute bottom-0 left-0 flex items-center">
                  {/* FREE Label */}
                  <span className="font-primary inline-flex items-center justify-center gap-1 bg-green-500 text-white font-semibold h-4 min-w-[48px] px-2 py-1 text-[8px]">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 2.5V2H0.5C0.223858 2 0 1.77614 0 1.5C0 1.22386 0.223858 1 0.5 1H1.26756C1.61337 0.402199 2.25972 0 3 0H6.5C6.77614 0 7 0.223858 7 0.5V5C7 5.55228 6.55228 6 6 6H2C1.5 6 1 5.75 1 5H1.5C1.77614 5 2 4.77614 2 4.5C2 4.22386 1.77614 4 1.5 4H1V3.5H2.5C2.77614 3.5 3 3.27614 3 3C3 2.72386 2.77614 2.5 2.5 2.5H1ZM1 2C1 1.63571 1.09739 1.29417 1.26756 1H3.5C3.77614 1 4 1.22386 4 1.5C4 1.77614 3.77614 2 3.5 2H1Z"
                        fill="white"
                      />
                      <path
                        d="M1 2.5H0.5C0.223858 2.5 0 2.72386 0 3C0 3.27614 0.223858 3.5 0.5 3.5H1V2.5Z"
                        fill="white"
                      />
                      <path
                        d="M1 4H0.5C0.223858 4 0 4.22386 0 4.5C0 4.77614 0.223858 5 0.5 5H1V4Z"
                        fill="white"
                      />
                      <path
                        d="M1.5 6.5C0.947715 6.5 0.5 6.94772 0.5 7.5C0.5 8.60614 1.39386 9.5 2.5 9.5H2.58535C2.53008 9.34361 2.5 9.17532 2.5 9C2.5 8.17157 3.17157 7.5 4 7.5C4.82843 7.5 5.5 8.17157 5.5 9C5.5 9.17532 5.46992 9.34361 5.41465 9.5H6.58535C6.53008 9.34361 6.5 9.17532 6.5 9C6.5 8.17157 7.17157 7.5 8 7.5C8.82843 7.5 9.5 8.17157 9.5 9C9.5 9.17532 9.46992 9.34361 9.41465 9.5H9.5C10.6061 9.5 11.5 8.60614 11.5 7.5V6.5H10C9.44886 6.5 9 6.05114 9 5.5V4C9 3.44886 9.44886 3 10 3H10.435L9.72405 1.75678L9.7224 1.75394C9.45515 1.29366 8.96258 1 8.42001 1H7.5V5C7.5 5.82843 6.82843 6.5 6 6.5H1.5Z"
                        fill="white"
                      />
                      <path
                        d="M10 3.5C9.725 3.5 9.5 3.725 9.5 4V5.5C9.5 5.775 9.725 6 10 6H11.5V5L10.645 3.5H10Z"
                        fill="white"
                      />
                      <path
                        d="M8.87512 9.48428C8.95469 9.3408 9 9.17569 9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9C7 9.17569 7.04531 9.3408 7.12488 9.48428C7.29543 9.79183 7.62341 10 8 10C8.37659 10 8.70457 9.79183 8.87512 9.48428Z"
                        fill="white"
                      />
                    </svg>
                    FREE
                  </span>
                  <span className="font-primary inline-flex items-center justify-center gap-1 bg-yellow-500 text-white  h-4 min-w-[60px] px-2 py-1 text-[8px] ">
                    {/* SVG Icon */}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.47309 2.5L9.0625 2.50004C9.64911 2.50004 10 2.97593 10 3.56254V4.00006C10 4.55235 9.55229 5.00006 9 5.00006H5.5V3.50006L4.5 3.50004V5.00006H1C0.447715 5.00006 0 4.55235 0 4.00006V3.56254C0 2.97593 0.413386 2.50004 1 2.50004H1.60688C1.48011 2.25952 1.40625 1.98365 1.40625 1.68754C1.40625 0.765751 2.10629 4.36306e-05 2.98633 4.36306e-05C3.43124 4.36306e-05 3.78709 0.136147 4.13658 0.45226C4.35681 0.651447 4.51248 0.922239 4.7143 1.27331C4.79875 1.42021 4.89128 1.58117 5 1.75681L5.01268 1.73633C5.37459 1.1516 5.6346 0.7315 5.94338 0.452217C6.29288 0.136104 6.64873 0 7.09364 0C7.97368 0 8.67372 0.765707 8.67372 1.6875C8.67372 1.9836 8.59986 2.25947 8.47309 2.5ZM6.5 1.13244C6.26742 1.35557 6.0166 1.76194 5.57284 2.50004L7 2.50007C7.5 2.50007 7.79872 2.15065 7.79872 1.6875C7.79872 1.22435 7.46788 0.875 7.09364 0.875C6.9884 0.875 6.89975 0.885291 6.81 0.919846C6.71993 0.954518 6.62046 1.01687 6.5 1.13244ZM3.27083 0.919902C3.181 0.885348 3.09211 0.875044 2.98633 0.875044C2.61218 0.875044 2.28116 1.22431 2.2793 1.68776C2.2794 2.1508 2.5 2.50004 2.98438 2.50004H4.42717C4.27307 2.24372 4.15194 2.02741 4.04973 1.84489C3.8576 1.50179 3.73233 1.27809 3.58066 1.13244C3.46033 1.01689 3.36094 0.954565 3.27083 0.919902Z"
                        fill="#CC7600"
                      />
                      <path
                        d="M0.5 6.00006V8.81257C0.5 9.50007 1 10.0001 1.6875 10.0001H8.4375C9 10.0001 9.5 9.50007 9.5 8.81257V6.00006H5.5V10.0001H4.5V6.00006H0.5Z"
                        fill="#CC7600"
                      />
                    </svg>
                    {/* Text */}
                    Quà tặng
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center text-pink-500 text-[6px] font-bold bg-[#FFE7ED] rounded-md p-1 m-1">
                <img
                  src={FS}
                  alt="Product"
                  className="w-10 h-auto object-cover "
                />
                <span className="relative  font-primary">·20:20·12/12</span>
              </div>
              {/* Thông tin sản phẩm */}
              <div className="p-2">
                <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 mb-1 leading-tight">
                  {product.name}
                </h3>
                <p className="text-red-500 text-sm font-bold">
                  {product.price.toLocaleString()} đ
                </p>
                <p className="text-gray-500 text-xs font-primary">
                  {product.buy.toLocaleString()} đã bán
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nút tải thêm và thu gọn */}
      <div className="flex justify-center mt-8 gap-4">
        {/* Hiển thị nút "Tải thêm" nếu chưa hiển thị hết sản phẩm */}
        {visibleCount < products.length && (
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Tải thêm
          </button>
        )}

        {/* Hiển thị nút "Thu gọn" nếu đang hiển thị hơn số lượng mặc định */}
        {visibleCount > 12 && (
          <button
            onClick={() => setVisibleCount(12)}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Thu gọn
          </button>
        )}
      </div>
    </div>
  );
}
