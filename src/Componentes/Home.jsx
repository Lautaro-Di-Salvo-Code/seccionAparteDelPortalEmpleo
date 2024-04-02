import React from 'react'
import { HoleHeader } from './HomeHijos/HoleHeadear.jsx'
import { ObjetoG } from '../ObjetoGeneral.jsx'
import {BrowserRouter,Routes, Route } from "react-router-dom"
import { Body } from './HomeHijos/Body.jsx'
export const Home = () => {

     const {header ,
      Navbar ,
      infoHeaderHome,
      CiudadanoEmpleador,
      capacitacionTrabajo ,
      inscriptionCursosCursosCortos,
      videosInformativos,
      agenciasTerrOficinas
    } = ObjetoG()

  return (
   <>
  <BrowserRouter>
    <HoleHeader header={header} Navbar={Navbar}/>

    <Routes>
    <Route path="/" element={<Body
      infoHeaderHome={infoHeaderHome}
      CiudadanoEmpleador={CiudadanoEmpleador}
      capacitacionTrabajo={capacitacionTrabajo}
      inscriptionCursosCursosCortos={inscriptionCursosCursosCortos}
      videosInformativos={videosInformativos}
      agenciasTerrOficinas={agenciasTerrOficinas}
      />}/>
    </Routes>

  </BrowserRouter>
   </>
  )
}
