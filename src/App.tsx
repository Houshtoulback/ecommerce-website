import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound";
import ShoppingCart from "./pages/ShoppingCart";
import { arrayApi } from "./api"

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="shop" element={<Products arrayApi={arrayApi} navBorder={true} navGreenMode={true} />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="shopping-cart" element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
