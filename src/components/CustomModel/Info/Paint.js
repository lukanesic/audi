import React from 'react'

const Paint = ({ paints, active, setActive, carPath }) => {
  const paintVariants = {
    initial: {
      opacity: 0,
    },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <>
      <h2>Paint</h2>
      <div className='paint-selector'>
        {paints.map((paint, i) => (
          <div
            className={`color-border ${active === i ? 'show' : ''}`}
            key={i}
            onClick={() => setActive(i)}
          >
            <div className='color'>
              <img src={`${carPath}/colors/${paint[2]}`} alt={paint[2]} />
            </div>
          </div>
        ))}
      </div>
      <div className='paint-info'>
        <h3>{paints[active][4]}</h3>
        <h6>{paints[active][3]}</h6>
      </div>
    </>
  )
}

export default Paint
