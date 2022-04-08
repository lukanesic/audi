import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import logo from './../../images/audi-logo.png'

const Loader = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 1, display: 'grid' }}
        animate={{ opacity: 0, display: 'none' }}
        transition={{
          opacity: {
            duration: 1.5,
            delay: 1,
          },
          display: {
            delay: 2.5,
          },
        }}
        className='loader'
      >
        <motion.img
          src={logo}
          alt={logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              duration: 0.9,
              delay: 0.2,
            },
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
