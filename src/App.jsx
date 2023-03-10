import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element='1'/>
        <Route path='/' element='2'/>
        <Route path='/' element='3' />
        <Route path='/' element='4' />
        <Route path='/' element='5' />
        <Route path='/' element='6' />
        <Route path='/' element='7' />
        <Route path='/' element='8' />
        
      </Routes>
    </Layout>
    
  )
}

export default App
