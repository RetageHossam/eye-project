import React from 'react'
import Navbar from '../compontents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../compontents/Footer'

export default function Layout() {
  return (
    <div>
        <Navbar/>
       <main className="flex-grow">
        <Outlet/>
       </main>
            
        
        <Footer/>
    </div>
  )
}
