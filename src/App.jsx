import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop'

function App() {

  return (
    <Layout>
      hello world
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/projects'element={<Proj} />
        <Route path='/news'/>
        <Route path='/error'/>
        <Route path='/style'/>
        <Route path='/password'/>
        <Route path='/licences'/>
        <Route path='/changelog' element={<Chan}/>
      </Routes>
    </Layout>
    
  )
}

export default App
