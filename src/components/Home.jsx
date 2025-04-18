import React from 'react'

import { Navbar } from './Navbar'
import { Banner } from './Banner'
import { About } from './About'
import { Works } from './Works'
import Project from './Project'
import Footer from './Footer'


export const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Works/>
    <Project/>
    <Footer/>
    </>
  )
}
