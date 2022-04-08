import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Name = ({ name, delivery }) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      duration: 0.4,
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {name && (
        <motion.div
          variants={variants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition='transition'
          key={name}
          className='name'
        >
          <motion.h1 variants={variants}>{name}</motion.h1>
          <motion.h4 variants={variants}>{delivery}</motion.h4>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Name
