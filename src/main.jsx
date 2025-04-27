import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router'
import './index.css'
import Layout from './layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import Cirrocis from './pages/cirrocis/Cirrocis.jsx'
import HigadoGraso from './pages/HigadoGraso/HigadoGraso.jsx'
import Hepatitis from './pages/Hepatitis/Hepatitis.jsx'
import CancerHigado from './pages/CancerHigado/CancerHigado.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Learn" element={<Home />} />
          <Route path="/Learn/Cirrocis" element={<Cirrocis />} />
          <Route path="/Learn/HigadoGraso" element={<HigadoGraso />} />
          <Route path="/Learn/Hepatitis" element={<Hepatitis />} />
          <Route path="/Learn/CancerHigado" element={<HigadoGraso />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  
)
