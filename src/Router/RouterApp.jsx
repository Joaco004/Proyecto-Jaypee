import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { About } from '../pages/About'
import { Order } from '../pages/Order'
import { NotFound } from '../pages/NotFound'

const RouterApp = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/> 
            <Route path="/Menu" element={<Menu />}/> 
            <Route path="/About" element={<About />}/> 
            <Route path="/Order" element={<Order />}/> 
            <Route path="*" element={<NotFound />}/>

          </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;
export { RouterApp };