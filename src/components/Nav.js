import React, { useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Nav = ({ setIsOpen, open, setIsOpenD, openD, cName }) => {
  const [active1, setActive1] = useState()
  const [active2, setActive2] = useState()

  const navMainLinks = [
    'A3',
    'Q8',
    'A5',
    'e-tron',
    'Solar Roof',
    'Solar Panels',
    'Electric Fuel',
  ]

  const navUserLinks = ['Shop', 'Account']

  return (
    <motion.nav
      className={cName}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* All media */}
      <div className='nav-logo'></div>
      {/* Only larger */}
      <div className='nav-main-links'>
        <ul>
          <AnimateSharedLayout>
            {navMainLinks.map((item, i) => (
              <AnimatedLinks
                item={item}
                key={i}
                active={active1 === i}
                onHoverStart={() => setActive1(i)}
                onHoverEnd={() => setActive1()}
                link={item.toLowerCase()}
              />
            ))}
          </AnimateSharedLayout>
        </ul>
      </div>
      {/* Only small */}
      <div className='nav-menu'>
        <button onClick={() => setIsOpen(!open)}>Menu</button>
      </div>
      {/* Only larger */}
      <div className='nav-user-links-desktop'>
        <ul>
          <AnimateSharedLayout>
            {navUserLinks.map((item, i) => (
              <AnimatedLinks
                item={item}
                key={i}
                active={active2 === i}
                onHoverStart={() => setActive2(i)}
                onHoverEnd={() => setActive2()}
                link={item.toLowerCase}
              />
            ))}
          </AnimateSharedLayout>

          <li className='menu-li' onClick={() => setIsOpenD(!openD)}>
            Menu
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Nav

const AnimatedLinks = ({ item, active, onHoverStart, onHoverEnd, link }) => {
  return (
    <>
      <motion.li onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
        <Link to={`/${link}`}>{item}</Link>
        <AnimatePresence>
          {active && (
            <motion.div
              className='dropback3'
              layoutId='hover'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0.1,
              }}
            />
          )}
        </AnimatePresence>
      </motion.li>
    </>
  )
}
