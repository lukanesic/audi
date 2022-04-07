import React, { useState } from 'react'
import Nav from '../components/Nav'
import MobileMenu from '../components/Menus/MobileMenu'
import DesktopMenu from '../components/Menus/DesktopMenu'

const ModelLayout = (props) => {
  const [open, setIsOpen] = useState(false)
  const [openD, setIsOpenD] = useState(false)
  return (
    <>
      <Nav
        cName={'m-nav'}
        setIsOpen={setIsOpen}
        open={open}
        setIsOpenD={setIsOpenD}
        openD={openD}
      />
      <MobileMenu setIsOpen={setIsOpen} open={open} />
      <DesktopMenu setIsOpenD={setIsOpenD} openD={openD} />
      <div className='page-container'>{props.children}</div>
    </>
  )
}

export default ModelLayout
