import React from 'react'
import { HoleHeader } from './HomeHijos/HoleHeadear.jsx'
import { ObjetoG } from '../ObjetoGeneral.jsx'
import {BrowserRouter,Routes, Route } from "react-router-dom"
import { Body } from './HomeHijos/Body.jsx'
import { Footer } from './Fotter.jsx'


export const Home = () => {

     const {
      header ,
      Navbar ,
      footer
    } = ObjetoG()

  return (
   <>
  <BrowserRouter>
    <HoleHeader header={header} Navbar={Navbar}/>

    <Routes>
    <Route  path="/Home" element={<Body
      footer={footer}
      />}/>
      <Route  path='/2' element={ <h1>Hola</h1>  }/>
    </Routes>
      <Footer footer={footer}/>
  </BrowserRouter>
   </>
  )
}
