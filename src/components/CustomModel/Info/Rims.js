import React from 'react'

const Rims = ({ wheels, active, setActive, carPath }) => {
  const paintVariants = {
    initial: {
      opacity: 0,
    },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <>
      <h2>Wheels</h2>
      <div className='paint-selector'>
        {wheels.map((wheel, i) => (
          <div
            className={`color-border ${active === i ? 'show' : ''}`}
            key={i}
            onClick={() => setActive(i)}
          >
            <div className='color'>
              <img src={`${carPath}/felne/${wheel[0]}`} alt='' />
            </div>
          </div>
        ))}
      </div>
      <div className='paint-info'>
        <h3>{wheels[active][2]}</h3>
        <h6>{wheels[active][1]}</h6>
      </div>
    </>
  )
}

export default Rims
