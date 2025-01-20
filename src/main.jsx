import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Main from './layout/Main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}>
        <Route index="true" element={<Home/>}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
