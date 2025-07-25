import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'

import Layout from './layout/Layout.jsx'
import Home from './pages/home/Home.jsx'
import Cirrocis from './pages/Enfermedades/cirrocis/Cirrocis.jsx'
import HigadoGraso from './pages/Enfermedades/HigadoGraso/HigadoGraso.jsx'
import Hepatitis from './pages/Enfermedades/Hepatitis/Hepatitis.jsx'
import CancerHigado from './pages/Enfermedades/CancerHigado/CancerHigado.jsx'
import Patologias from './pages/patologias/Patologias.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Quiz from './pages/Quiz/Quiz.jsx'
import Resultados from './pages/Quiz/Resultados/Resultados.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Learn" element={<Home />} />
        <Route path="/Learn/Cirrocis" element={<Cirrocis />} />
        <Route path="/Learn/HigadoGraso" element={<HigadoGraso />} />
        <Route path="/Learn/Hepatitis" element={<Hepatitis />} />
        <Route path="/Learn/CancerHigado" element={<CancerHigado />} />
        <Route path="/Patologias" element={<Patologias />} />
        <Route
          path="/Quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path='/Quiz/Resultados'
          element={
            <ProtectedRoute>
              <Resultados />
            </ProtectedRoute>
          }
        />
        <Route
          path='/Quiz/Presentar'
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  </BrowserRouter>
)
