import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import TitleContextProvider from "./context/TitleContext";
import CartContextProvider from "./context/CartContext";


//  PAGES
import HomePage from "./pages/HomePage"
import ContactoPage from "./pages/ContactoPage"
import NosotrosPage from "./pages/NosotrosPage"
import DetailPage from "./pages/DetailPage";
import PaddleTypePage from "./pages/PaddleTypePage"
import CartPage from "./pages/CartPage"; 


const App = () => {
  return (
    
    
    <BrowserRouter>
    <TitleContextProvider>
    <CartContextProvider>
    <div className="App">
      <Header /> 
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Contacto" element={<ContactoPage />} />
      <Route path="/Nosotros" element={<NosotrosPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/paddle-type/:type" element={<PaddleTypePage />} />
      <Route path="/Carrito" element={<CartPage />} />
    </Routes>
    </div>
    </CartContextProvider>
    </TitleContextProvider>
    </BrowserRouter>
    
  );
};

export default App