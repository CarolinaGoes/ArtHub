import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import ArtistaDashboard from "../pages/ArtistaDashboard/ArtistaDashboard";
import Carrinho from "../pages/Carrinho/Carrinho";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/ArtistaDashboard" element={<ArtistaDashboard />} />
        <Route path="/Carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}
