import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Main from './layout/Main'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register'
import AuthProvider from './provider/AuthProvider'
import Fetchered from './components/Ferchered/Fetchered'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './layout/DashboardLayout'
<<<<<<< HEAD
import ProductDetails from './components/ProductDetails/ProductDetails'
=======
import AddProduct from './pages/Dashboard/User/AddProduct'
>>>>>>> 9611dbf0a1f4df1901f40b16f47bc0a0b9142ac2

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <BrowserRouter>
        <AuthProvider>
        <Toaster />
        <Routes>
        <Route path="/" element={<Main />}>
        <Route index="true" element={<Home />}></Route>
        <Route path="/allproduct" element={<Fetchered />}></Route>
        <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
            </Route>
            
            <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route path="/dashboard/add-product" element={<AddProduct/>}></Route>
           </Route>
        </Routes>
        
    </AuthProvider>
  </BrowserRouter>
  </div>
  </StrictMode>,
)
