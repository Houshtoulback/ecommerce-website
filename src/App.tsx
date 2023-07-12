import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound";
import { arrayApi } from "./api"

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    // <div className="select-none">
    //   <HomePage/>
    //   <Products arrayApi={arrayApi} navBorder={true} navGreenMode={true} />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="shop" element={<Products arrayApi={arrayApi} navBorder={true} navGreenMode={true} />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
