import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import {
  changeInteriors,
  rimsIntersecting,
} from '../../../redux/yourModelSlice'

const Interior = ({ interiors, active, setActive, carPath }) => {
  const ref = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting === true) {
        dispatch(rimsIntersecting(true))
      } else {
        dispatch(rimsIntersecting(false))
      }
    })
    observer.observe(ref.current)
  }, [dispatch, rimsIntersecting])

  return (
    <>
      <h2>Interiors</h2>
      <div className='paint-selector' ref={ref}>
        {interiors.map((interior, i) => (
          <div
            className={`color-border ${active === i ? 'show' : ''}`}
            key={i}
            onClick={() => setActive(i)}
          >
            <div className='color'>
              <img src={`${carPath}/interior/${interior[1]}`} alt='' />
            </div>
          </div>
        ))}
      </div>
      <div className='paint-info'>
        <h3>{interiors[active][3]}</h3>
        <h6>{interiors[active][2]}</h6>
      </div>
    </>
  )
}

export default Interior
