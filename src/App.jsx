import "./App.css";

// COMPONENTS
import Header from "./components/Header/Header";
// import CardProduct from "./components/CardProduct/CardProduct";
import NavBar from "./components/Navbar/NavBar";
// import img1 from "./components/CardProduct/PaletaSteel.png";
// import img2 from "./components/CardProduct/PaletaCarbon.png";
// import img3 from "./components/CardProduct/PaletaRoyal.png";


// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  PAGES
import HomePage from "./pages/HomePage"
import ContactoPage from "./pages/ContactoPage"
import NosotrosPage from "./pages/NosotrosPage"
import DetailPage from "./pages/DetailPage";
import CategoryPage from "./pages/CategoryPage"

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header title="WALLY-STORE"/>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Contacto" element={<ContactoPage />} />
      <Route path="/Nosotros" element={<NosotrosPage />} />
      <Route path="detail/:id" element={<DetailPage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App