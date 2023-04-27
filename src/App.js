import {Routes , Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkouts from "./components/Checkouts";
import Header from "./components/Header";

import {styles} from "./css/App.moudle.css";
 import CartContextProvider from "./context/CartContextProvider";


function App() {

  return (
    <div>


<CartContextProvider>
       <Header />
      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkouts" element={<Checkouts/>} />


  
       </Routes>

       </CartContextProvider>
    </div>
  );
}

export default App;
