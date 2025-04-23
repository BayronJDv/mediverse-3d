import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css'
import Layout from './layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import Cirrocis from './pages/cirrocis/Cirrocis.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Home />} />
          <Route path="/Learn/Cirrocis" element={<Cirrocis />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  
)
