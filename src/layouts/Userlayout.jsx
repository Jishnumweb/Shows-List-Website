import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Userlayout() {
  return (
    <div className='userlayout'>
        <div className="headermain">
            <Header/>
        </div>
        <div className="addcontents">
            <Outlet/>

        </div>
        <div className="footermain">
            <Footer/>
        </div>
      
    </div>
  )
}

export default Userlayout
