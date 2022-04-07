import React from 'react'
import { motion } from 'framer-motion'

const Description2 = ({ name, specification, showAnimation }) => {
  const {
    desc1,
    desc2,
    desc3,
    span1,
    span2,
    span3,
    h31,
    h32,
    h33,
    h61,
    h62,
    h63,
  } = specification

  return (
    <motion.div
      variants={showAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      className='mdl-desc-cont2'
    >
      <h1 className='mdl-head'>{name}</h1>

      <div className='mdl-desc'>
        <div className='mdl-cont'>
          <div className='mdl-spec'>
            <div className='mdl'>
              <h3>{desc1}</h3>
              <span>{span1}</span>
            </div>
            <h6>{h31}</h6>
            <h5>{h61}</h5>
          </div>

          <div className='mdl-spec'>
            <div className='mdl'>
              <h3>{desc2}</h3>
              <span>{span2}</span>
            </div>
            <h6>{h32}</h6>
            <h5>{h62}</h5>
          </div>

          <div className='mdl-spec'>
            <div className='mdl'>
              <h3>{desc3}</h3>
              <span>{span3}</span>
            </div>
            <h6>{h33}</h6>
            <h5>{h63}</h5>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Description2
