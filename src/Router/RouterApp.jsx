import { Routes, Route } from "react-router-dom";

import { Layout } from '../components/Layout'
import { Home } from '../pages/Home'
import { Menu } from '../pages/Menu'
import { About } from '../pages/About'
import { Order } from '../pages/Order'
import { NotFound } from '../pages/NotFound'

const RouterApp = () => {
    return (
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/> 
          <Route path="/about" element={<About />}/> 
          <Route path="/order" element={<Order />}/> 
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    )
}


export { RouterApp };