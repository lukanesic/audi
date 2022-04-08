import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import CLogo from './CLogo'
import CLang from './CLang'
import Language from './Language'

const CNav = () => {
  const [active, setActive] = useState()

  useEffect(() => {
    if (active) {
      const width = document.body.clientWidth
      document.body.style.overflowY = 'hidden'
      document.body.style.width = `${width}px`
    } else {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
    }

    return () => {
      document.body.style.overflowY = 'visible'
      document.body.style.width = `auto`
    }
  }, [active])

  return (
    <div className='custom-nav-full-width'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className='custom-nav'
      >
        <CLogo />

        <CLang active={active} setActive={setActive} />
      </motion.div>
      <AnimatePresence>
        {active && <Language setActive={setActive} active={active} />}
      </AnimatePresence>
    </div>
  )
}

export default CNav
