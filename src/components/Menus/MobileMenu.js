import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BsGlobe } from 'react-icons/bs'

const links = [
  { name: 'Audi A8', to: '#', id: 3 },
  { name: 'Audi Q5', to: '#', id: 4 },
  { name: 'Audi e-tron', to: '#', id: 5 },
  { name: 'Account', to: '#', id: 6 },
  { name: 'Test Drive', to: '#', id: 13 },
  { name: 'Shop', to: '#', id: 7 },
  { name: 'Call Center', to: '#', id: 11 },
  { name: 'Find Us', to: '#', id: 9 },
  { name: 'Support', to: '#', id: 10 },
]

const MobileMenu = ({ setIsOpen, open }) => {
  useEffect(() => {
    if (open) {
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
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className='blur-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onClick={() => setIsOpen(!open)}
          />
          <motion.div
            initial={{ opacity: 0, width: 150 }}
            animate={{ opacity: 1, width: 300 }}
            exit={{ opacity: 0, width: 150 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className='mobile-menu'
          >
            <motion.div className='button'>
              <button onClick={() => setIsOpen(!open)}>X</button>
            </motion.div>
            <motion.ul>
              <Link to='/a3'>
                <motion.li>Audi A3</motion.li>
              </Link>

              <Link to='/q8'>
                <motion.li>Audi Q8</motion.li>
              </Link>
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

export default MobileMenu
