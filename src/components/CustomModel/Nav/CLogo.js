import React from 'react'
import { Link } from 'react-router-dom'
const CLogo = () => {
  return (
    <div className='c-logo'>
      <Link to='/'>
        <div className='logo' />
      </Link>
    </div>
  )
}

export default CLogo
