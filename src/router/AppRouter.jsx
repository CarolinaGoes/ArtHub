import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import Cadastro from "../pages/cadastro/Cadastro.jsx";
import Perfil from "../pages/perfil/Perfil.jsx";
import Carrinho from "../pages/carrinho/Carrinho.jsx";
import Favoritos from "../pages/favoritos/Favoritos.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="/Favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  );
}
