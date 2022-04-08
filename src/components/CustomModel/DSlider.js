import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { rimsIntersecting } from '../../redux/yourModelSlice'

const DSlider = ({ carPath, selectedCar, selectedInterior }) => {
  const front = `${carPath}/front/${selectedCar[0]}`
  const side = `${carPath}/side/${selectedCar[1]}`
  const felna = `${carPath}/felne/${selectedCar[2]}`
  const interior = `${carPath}/interior/${selectedInterior}`

  const { isRimsIntersecting, isInteriorIntersecting } = useSelector(
    (state) => state.yourModel
  )

  const dispatch = useDispatch()

  const images = [front, side, felna, interior]

  const [[page, direction], setPage] = useState([0, 0])

  useEffect(() => {
    if (!isRimsIntersecting) {
      setPage([0, 0])
    } else {
      setPage([2, 0])
    }

    if (!isInteriorIntersecting) {
      setPage([0, 0])
    } else {
      dispatch(rimsIntersecting(false))
      setPage([3, 0])
    }
  }, [isInteriorIntersecting, isRimsIntersecting])

  const imageindex = wrap(0, images.length, page)

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  if (page < -3 || page > 3) {
    setPage([0, 0])
  }

  return (
    <motion.div
      className='slider'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.6,
        duration: 0.5,
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className={`${page === -1 || page === 3 ? 'interior' : ''}`}
          key={page}
          src={images[imageindex]}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.4,
          }}
        />
      </AnimatePresence>
      <motion.div
        className='slider-btn-container'
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
          whileTap={{ scale: 0.9 }}
          className='prev-btn'
          onClick={() => paginate(-1)}
        >
          <MdKeyboardArrowLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
          whileTap={{ scale: 0.9 }}
          className='next-btn'
          onClick={() => paginate(+1)}
        >
          <MdKeyboardArrowRight />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default DSlider
