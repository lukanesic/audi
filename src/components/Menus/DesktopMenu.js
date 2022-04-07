import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsGlobe } from 'react-icons/bs'

const links = [
  { name: 'Account', to: '#', id: 1 },
  { name: 'Test Drive', to: '#', id: 2 },
  { name: 'Shop', to: '#', id: 3 },
  { name: 'Call Center', to: '#', id: 4 },
  { name: 'Find Us', to: '#', id: 5 },
  { name: 'Support', to: '#', id: 6 },
  { name: 'Trade-in', to: '#', id: 7 },
  { name: 'Powerwall', to: '#', id: 8 },
  { name: 'Charging', to: '#', id: 9 },
  { name: 'Utilities', to: '#', id: 10 },
  { name: 'Inverstor Relations', to: '#', id: 19 },
]

const DesktopMenu = ({ setIsOpenD, openD }) => {
  useEffect(() => {
    if (openD) {
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
  }, [openD])
  return (
    <AnimatePresence>
      {openD && (
        <>
          <motion.div
            className='blur-container-desktop'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onClick={() => setIsOpenD(!openD)}
          />
          <motion.div
            initial={{ opacity: 0, width: 150 }}
            animate={{ opacity: 1, width: 300 }}
            exit={{ opacity: 0, width: 150 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className='mobile-menu'
          >
            <motion.div className='button'>
              <button onClick={() => setIsOpenD(!openD)}>X</button>
            </motion.div>
            <motion.ul>
              {links.map((link) => (
                <motion.li key={link.id} id={link.id}>
                  {link.name}
                </motion.li>
              ))}
              <div
                className='c-lang'
                style={{ display: 'flex', justifyContent: 'start' }}
              >
                <BsGlobe />
                <h1>US</h1>
              </div>
            </motion.ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default DesktopMenu
