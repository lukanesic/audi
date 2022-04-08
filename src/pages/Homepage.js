import React, { useRef, useEffect, useState } from 'react'
import HomeLayout from '../layouts/HomeLayout'
import { Link } from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion'

const Homepage = () => {
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()

  const refR = useRef()
  const refS = useRef()

  const [m1, setM1] = useState(true)
  const [m2, setM2] = useState(false)
  const [m3, setM3] = useState(false)

  const [show, setShow] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setM1(true)
      } else {
        setM1(false)
      }
    })

    observer.observe(ref1.current)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setM2(true)
      } else {
        setM2(false)
      }
    })

    observer.observe(ref2.current)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setM3(true)
      } else {
        setM3(false)
      }
    })

    observer.observe(ref3.current)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setShow(false)
      }
    })

    observer.observe(refR.current)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setShow(true)
      }
    })

    observer.observe(refS.current)
  }, [])

  return (
    <HomeLayout>
      <div className='p-c'>
        <div className='p-cc a3'>
          <div className='p-c-child' ref={ref1} />
        </div>

        <div className='p-cc q8'>
          <div>
            <div className='p-c-child' ref={refS} />
          </div>
          <div>
            <div className='p-c-child' ref={ref2} />
          </div>
        </div>

        <div className='p-cc a5'>
          <div className='p-c-child' ref={refR} />
          <div className='p-c-child' ref={ref3} />
        </div>

        <AnimatePresence>
          {m1 && (
            <Headings
              title={'Audi A3'}
              description={'Order Online for Touchless Delivery'}
              btn1={'Order Now'}
              btn2={'About Model'}
              link={'/design/a3'}
              link2={'/a3'}
            />
          )}
        </AnimatePresence>

        {show && (
          <AnimatePresence>
            {m2 && (
              <Headings
                title={'Audi Q8'}
                description={'Order Online for Touchless Delivery'}
                btn1={'Order Now'}
                btn2={'About Model'}
                link={'/design/q8'}
                link2={'/q8'}
              />
            )}
          </AnimatePresence>
        )}

        <AnimatePresence>
          {m3 && (
            <Headings
              title={'Audi A5'}
              description={'Order Online for Touchless Delivery'}
              btn1={'Order Now'}
              btn2={'About Model'}
              link={''}
              link2={''}
            />
          )}
        </AnimatePresence>
      </div>
    </HomeLayout>
  )
}

export default Homepage

const Headings = ({ title, description, btn1, btn2, link, link2 }) => {
  return (
    <motion.div className='overlay-r'>
      <motion.div
        className='overlay-m'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        // transition={{ duration: 0.2 }}
      >
        <div className='tlt-desc'>
          <h1>{title}</h1>
          <h5>{description}</h5>
        </div>
        <div className='overlayy-btns'>
          <Link to={link}>
            <button className='primary-btn'>{btn1}</button>
          </Link>
          <Link to={link2}>
            <button className='secondary-btn'>{btn2}</button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
