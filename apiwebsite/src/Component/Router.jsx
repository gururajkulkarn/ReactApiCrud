import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Details from './Details'
import Editform from './Editform'
import Formdata from './Form'


const Router = () => {

 
    
  return (
    <>
      
<BrowserRouter>
<Routes>
    <Route exact path="/" element={<Formdata/>} />
    <Route exact path="/update/:id" element={<Editform/>} />
    <Route exact path="/detail/:id" element={<Details/>} />
</Routes>
</BrowserRouter>

    </>
  )
}

export default Router
