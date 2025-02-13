


import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import Products from './Components/Products.jsx'
import Product from './Components/Product.jsx'
import Cart from './Components/Cart.jsx'
import Login from './Components/Login.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'

function App() {

  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      
    </>
  )
}

export default App
