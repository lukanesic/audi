import React, { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { interiorIntesecting } from '../../../redux/yourModelSlice'

const Doors = ({ head, doors, active, setActive, carPath }) => {
  const ref = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting === true) {
        dispatch(interiorIntesecting(true))
      } else {
        dispatch(interiorIntesecting(false))
      }
    })
    observer.observe(ref.current)
  }, [dispatch, interiorIntesecting])

  const paintVariants = {
    initial: {
      opacity: 0,
    },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <>
      <h2 ref={ref}>{head}</h2>
      <div className='paint-selector'>
        {doors.map((door, i) => (
          <div
            className={`color-border ${active === i ? 'show' : ''}`}
            key={i}
            onClick={() => setActive(i)}
          >
            <div
              className='color'
              style={{
                display: 'grid',
                placeContent: 'center',
              }}
            >
              <h1
                style={{
                  textAlign: 'center',
                  background: '#cecece',
                  borderRadius: '50%',
                  width: 'inherit',
                  height: 'inherit',
                  fontSize: '2.2rem',
                  paddingTop: '.1rem',
                  cursor: 'pointer',
                }}
              >{`${door[0]}`}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='paint-info'>
        <h3>{doors[active][2]}</h3>
        <h6>{doors[active][1]}</h6>
      </div>
    </>
  )
}

export default Doors
