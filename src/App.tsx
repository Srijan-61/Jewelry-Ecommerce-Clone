import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductPage from "./Components/ProductPage/ProductPage";

import { Footer } from "./Components/Shared/footer";
import { Nav } from "./Components/Shared/nav";
import ShopAll from "./Components/ShopAll/shopAll";
import Gallery from "./Components/GalleryPage/gallery";
import CartPage from "./Components/Cart/cartPage";
import { LoginPage } from "./Components/loginPage/loginPage";
import { NotFound } from "./Components/Shared/NotFound";
import { CartProvider } from "./Components/Shared/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="max-w-[4000px] mx-auto">
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shopall" element={<ShopAll />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
          
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
