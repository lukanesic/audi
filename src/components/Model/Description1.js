import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Description1 = ({ name, specification, btn, link }) => {
  const { topSpeed, fuel, oneToHund } = specification

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 1,
      },
    },
  }

  return (
    <div className='mdl-desc-cont'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className='mdl-head'
      >
        {name}
      </motion.h1>

      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        className='mdl-desc'
      >
        <motion.div className='mdl-cont'>
          <motion.div className='mdl-spec'>
            <motion.div className='mdl'>
              <h3>{topSpeed}</h3>
              <span>km/h</span>
            </motion.div>
            <h6>Top Speed</h6>
          </motion.div>

          <div className='mdl-spec'>
            <div className='mdl'>
              <h3>{fuel}</h3>
            </div>
            <h6>Fuel</h6>
          </div>

          <div className='mdl-spec'>
            <div className='mdl'>
              <h3>{oneToHund}</h3>
              <span>s</span>
            </div>
            <h6>0-100km/h</h6>
          </div>
        </motion.div>
        <Link to={link}>
          <button>{btn}</button>
        </Link>
      </motion.div>
    </div>
  )
}

export default Description1
