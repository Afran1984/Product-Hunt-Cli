import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Main from './layout/Main'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}>
          <Route index="true" element={<Home />}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Route>

    </Routes>
  </BrowserRouter>
  </div>
  </StrictMode>,
)
