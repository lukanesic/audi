import React from 'react'
import { BsGlobe } from 'react-icons/bs'

const CLang = ({ active, setActive }) => {
  return (
    <div className='c-lang' onClick={() => setActive(!active)}>
      <BsGlobe />
      <h1>US</h1>
    </div>
  )
}

export default CLang
