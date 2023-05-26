import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mobile from "./Mobile";
import Figma from './Figma';

const Allroutes = () => {
  return (
       <div>
            <Routes>
                 <Route path='/' element={<Figma/>}/>
                 <Route path='/mobile' element={<Mobile/>}/>
            </Routes>
    </div>
  )
}

export default Allroutes