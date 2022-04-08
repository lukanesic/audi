import React from 'react'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { fireEvent } from '@testing-library/dom'

const Specs = ({ fuel, oneToHund, topS }) => {
  const changeSpecsVariants = {
    initial: {
      opacity: 0,
    },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.5,
    },
  }

  return (
    <div className='specs'>
      <SpecsContainer
        element={topS}
        variants={changeSpecsVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        span={'km/h'}
        h6={'Top Speed'}
      />

      <SpecsContainer
        element={fuel}
        variants={changeSpecsVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        span={''}
        h6={'Fuel'}
      />

      <SpecsContainer
        element={oneToHund}
        variants={changeSpecsVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        span={'sec'}
        h6={'0-100km/h'}
      />
    </div>
  )
}

export default Specs

const SpecsContainer = ({
  variants,
  element,
  initial,
  animate,
  exit,
  transition,
  span,
  h6,
}) => {
  return (
    <div className='spec'>
      <AnimatePresence exitBeforeEnter>
        {element && (
          <motion.div
            key={element}
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
          >
            <motion.h2 variants={variants}>{element}</motion.h2>
            <span>{span}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <h6>{h6}</h6>
    </div>
  )
}
