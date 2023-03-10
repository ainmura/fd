import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {

  return (
    <Layout>
      hello world
      <Routes>
        <Route path='/'/>
        <Route path='/about'/>
        <Route path='/shop'/>
        <Route path='/projects'/>
        <Route path='/news'/>
        <Route path='/error'/>
        <Route path='/style'/>
        <Route path='/password'/>
        <Route path='/licences'/>
        <Route path='/changelog'/>
      </Routes>
    </Layout>
    
  )
}

export default App
