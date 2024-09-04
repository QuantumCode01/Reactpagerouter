import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside'
import Footer from './Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Layout() {
  return (
    <>
    <Header/>
    <main>
         <Row>
            <Col sm={4} className='main-aside'>
                <Aside/>
            </Col>
            <Col sm={8} className='main-section'>
                <Outlet/>
            </Col>
         </Row>
    </main>
    <Footer/>
    </>
  )
}
