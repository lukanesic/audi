import React from 'react'
import HomepageLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <HomepageLayout>
      <div className='not-found'>
        <h1>404</h1>
        <h1>Sorry, page doesn't exist!</h1>

        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    </HomepageLayout>
  )
}

export default NotFound
