import React from 'react'
import { motion } from 'framer-motion'

const Language = ({ setActive, active }) => {
  return (
    <motion.div
      className='language-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
      onClick={() => setActive(!active)}
    >
      <motion.div
        className='language'
        initial={{ opacity: 0, height: '10vh' }}
        animate={{ opacity: 1, height: '70vh' }}
        exit={{ opacity: 0, height: '10vh' }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className='language-items'>
          <h2>North America</h2>
          <div className='language-items-parent'>
            <div className='language-items-container active'>
              <h5>United States</h5>
              <h5>English</h5>
            </div>
            <div className='language-items-container'>
              <h5>Canada</h5>
              <h5>English / French</h5>
            </div>

            <div className='language-items-container'>
              <h5>Mexico</h5>
              <h5>Spanish</h5>
            </div>

            <div className='language-items-container'>
              <h5>Puerto Rico</h5>
              <h5>Spanish / English</h5>
            </div>
          </div>
        </div>

        <div className='language-items'>
          <h2>Europe</h2>
          <div className='language-items-parent'>
            <div className='language-items-container'>
              <h5>UK</h5>
              <h5>English</h5>
            </div>
            <div className='language-items-container'>
              <h5>France</h5>
              <h5>French</h5>
            </div>

            <div className='language-items-container'>
              <h5>Spain</h5>
              <h5>Spanish</h5>
            </div>

            <div className='language-items-container'>
              <h5>Germany</h5>
              <h5>German</h5>
            </div>

            <div className='language-items-container'>
              <h5>Sweden</h5>
              <h5>Swedish</h5>
            </div>

            <div className='language-items-container'>
              <h5>Rusia</h5>
              <h5>Russian</h5>
            </div>
          </div>
        </div>

        <div className='language-items'>
          <h2>Asia / Pacific</h2>
          <div className='language-items-parent'>
            <div className='language-items-container'>
              <h5>Sinagapore</h5>
              <h5>English</h5>
            </div>
            <div className='language-items-container'>
              <h5>China</h5>
              <h5>Chinese</h5>
            </div>

            <div className='language-items-container'>
              <h5>South Korea</h5>
              <h5>Korean</h5>
            </div>

            <div className='language-items-container'>
              <h5>Japan</h5>
              <h5>Japanese</h5>
            </div>

            <div className='language-items-container'>
              <h5>New Zealand</h5>
              <h5>English </h5>
            </div>

            <div className='language-items-container'>
              <h5>Australia </h5>
              <h5>English</h5>
            </div>

            <div className='language-items-container'>
              <h5>Hong Kong </h5>
              <h5>English / Chinese</h5>
            </div>
          </div>
        </div>

        <div className='language-items'>
          <h2>Middle East</h2>
          <div className='language-items-parent'>
            <div className='language-items-container'>
              <h5>UAE</h5>
              <h5>English / Arabic</h5>
            </div>
            <div className='language-items-container'>
              <h5>Israel</h5>
              <h5>Hebrew</h5>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Language
