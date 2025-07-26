import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Foooter'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <>
    <Header/>
    <Footer/>
    </>
  )
}
