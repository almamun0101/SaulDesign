import React from 'react'

import { Navbar } from './Navbar'
import { Banner } from './Banner'
import { About } from './About'
import { Works } from './Works'


export const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <About/>
    <Works/>
    </>
  )
}
