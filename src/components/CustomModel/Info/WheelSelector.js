import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WheelSelector = ({
  setModal,
  priceSelector,
  active,
  setActive,
  model,
}) => {
  const changePriceVariants = {
    initial: {
      opacity: 0,
    },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div className='wheel-selector'>
          <div className='wheel'>
            <h4>Front Wheel Drive</h4>
            <div
              className={`motor ${active === 'basicModel' && 'checked'}`}
              onClick={() => setActive('basicModel')}
            >
              {/* Ime modela i cena */}
              {priceSelector === 0 && (
                <>
                  <h5>{model.basicModel.name}</h5>
                  <motion.h5
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{ duration: 0.4, delay: 0.3 }}
                    variants={changePriceVariants}
                  >
                    {`${model.basicModel.priceDesc[0]}`}
                  </motion.h5>
                </>
              )}

              {priceSelector === 1 && (
                <>
                  <h5>{model.basicModel.name}</h5>
                  <motion.h5
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{ duration: 0.4, delay: 0.3 }}
                    variants={changePriceVariants}
                  >
                    {`${model.basicModel.priceDesc[1]}`}
                  </motion.h5>
                </>
              )}
            </div>
          </div>

          <div className='learn-more'>
            <h6>
              <span>Learn more</span> about Range and Performance
            </h6>
          </div>

          <div className='wheel'>
            <h4>All Wheel Drive </h4>
            <div
              className={`motor ${active === 'hybridModel' && 'checked'}`}
              onClick={() => setActive('hybridModel')}
            >
              {/* Ime modela i cena */}
              {priceSelector === 0 && (
                <>
                  <h5>{model.hybridModel.name}</h5>
                  <motion.h5
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{ duration: 0.4, delay: 0.3 }}
                    variants={changePriceVariants}
                  >
                    {`${model.hybridModel.priceDesc[0]}`}
                  </motion.h5>
                </>
              )}

              {priceSelector === 1 && (
                <>
                  <h5>{model.hybridModel.name}</h5>
                  <motion.h5
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{ duration: 0.4, delay: 0.3 }}
                    variants={changePriceVariants}
                  >
                    {`${model.hybridModel.priceDesc[1]}`}
                  </motion.h5>
                </>
              )}
            </div>
            <div
              className={`motor ${active === 'sportModel' && 'checked'}`}
              onClick={() => setActive('sportModel')}
            >
              {/* Ime modela i cena */}
              {priceSelector === 0 && (
                <>
                  <h5>{model.sportModel.name}</h5>
                  <motion.h5
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{ duration: 0.4, delay: 0.3 }}
                    variants={changePriceVariants}
                  >
                    {`${model.sportModel.priceDesc[0]}`}
                  </motion.h5>
                </>
              )}

              {priceSelector === 1 && (
                <>
                  <h5>{model.sportModel.name}</h5>
                  <motion.h5
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    transition={{ duration: 0.4, delay: 0.3 }}
                    variants={changePriceVariants}
                  >
                    {`${model.sportModel.priceDesc[1]}`}
                  </motion.h5>
                </>
              )}
            </div>
          </div>
        </div>
      </AnimatePresence>

      <div className='price-custom'>
        <p>
          * Prices shown include the $750 California Clean Fuel Reward and
          potential incentives and gas savings for a total of $5,050.
        </p>

        <button onClick={() => setModal(true)}>Feauture Details</button>
      </div>
    </>
  )
}

export default WheelSelector
