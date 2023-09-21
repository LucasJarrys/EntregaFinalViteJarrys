import "./App.css";

import Header from "./components/Header/Header";
import CardProduct from "./components/CardProduct/CardProduct";
import NavBar from "./components/Navbar/NavBar";
import img1 from "./components/CardProduct/PaletaSteel.png";
import img2 from "./components/CardProduct/PaletaCarbon.png";
import img3 from "./components/CardProduct/PaletaRoyal.png";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

 

const App = () => {
  return (
    <div>
      <Header title="WALLY-PADEL"/>
      <NavBar />
      <ItemListContainer title="BIENVENIDOS A WALLY-PADEL"/>
      <div className="UserSection">
        <CardProduct
        name="Paleta Steel"
        description="Paleta con fibra de carbon 3K"
        price="$100.000"
        img={img1}
        button="Agregar al carrito"
        />
        <CardProduct
        name="Paleta Magnus"
        description="Paleta con fibra de carbon 12K"
        price="$150.000"
        img={img2}
        button="Agregar al carrito"
        />
        <CardProduct
        name="Paleta Royal"
        description="Paleta con fibra de carbon 18K"
        price="$200.000"
        img={img3}
        button="Agregar al carrito"
        />
      </div>
    </div>
  );
};

export default App