import React from 'react'

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

const PriceSelector = ({ prices, active, setActive }) => {
  return (
    <div className='price-selector'>
      <AnimateSharedLayout>
        {prices.map((price, index) => (
          <PriceBtn
            key={index}
            text={price}
            active={active === index}
            onClick={() => {
              setActive(index)
            }}
          />
        ))}
      </AnimateSharedLayout>
    </div>
  )
}

export default PriceSelector

const PriceBtn = ({ text, active, onClick }) => {
  return (
    <motion.div className='price-btn' onClick={onClick}>
      <h5>{text}</h5>
      <AnimatePresence exitBeforeEnter>
        {active && (
          <motion.div
            className='dropback'
            layoutId='hover'
            transition={{ delay: 0.1, duration: 0.4 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
