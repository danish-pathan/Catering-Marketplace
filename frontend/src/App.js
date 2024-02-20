import React from 'react'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
      <Container>
        {/* <h1>Welcome to CaterPro! -  A smart choice for savvy catering solutions. 🍽️</h1> */}
        <Outlet/>
      </Container>
    </main>
    <Footer/>
    </>
  )
} 

export default App
