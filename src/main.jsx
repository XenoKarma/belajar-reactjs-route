import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home.jsx'
import About from './About.jsx'
import Product from './Products.jsx'
import Costumer from './Costumers.jsx'
import Sellers from './Sellers.jsx'
import Data from './Data.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/data'>
          <Route index element={<Data/>} />
          <Route path='products' element={<Product/>} />
          <Route path='costumers' element={<Costumer/>} />
          <Route path='sellers' element={<Sellers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
