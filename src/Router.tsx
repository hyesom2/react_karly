import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import ProductList from "@/pages/ProductList";
import ProductDetail from "@/pages/ProductDetail";
import Cart from "@/pages/Cart";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default Router;