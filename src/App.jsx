import { Routes, Route } from "react-router-dom";

import ProductCard from "./Component/ProductCard";
import ProductList from "./Component/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
