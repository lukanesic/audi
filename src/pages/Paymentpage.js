import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// motion
import { AnimatePresence, motion } from 'framer-motion'

// Components
import CNav from '../components/CustomModel/Nav/CNav'
import Loader from '../components/CustomModel/Loader'
import DSlider from '../components/CustomModel/DSlider'
import Name from '../components/CustomModel/Info/Name'
import YourModel from '../components/CustomModel/Info/YourModel'
import PriceSelector from '../components/CustomModel/Info/PriceSelector'
import FinalPrice from '../components/CustomModel/Info/FinalPrice'
import SelectedModelSpecs from '../components/CustomModel/Info/SelectedModelSpecs'
import PaymentMethod from '../components/CustomModel/Info/PaymentMethod'
import CashPayment from '../components/CustomModel/Info/CashPayment'
import Checkout from '../components/CustomModel/Info/Checkout'

const Paymentpage = () => {
  const { customModel } = useSelector((state) => state.yourModel)

  const [activeMethod, setActiveMethod] = useState(0)
  const [showCheckout, setShowCheckout] = useState(false)

  const { door, interior, paint, seat, wheel, model } = customModel

  console.log(customModel)

  const vehiclePrice =
    model.price +
    interior.priceToCalc +
    paint.priceToCalc +
    seat.priceToCalc +
    wheel.priceToCalc +
    door.priceToCalc

  const vehicleCashPrice = vehiclePrice + 1200 + 250

  const carPath = './../images/bgs/models'

  const getNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  const modelInfoVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  }

  useEffect(() => {
    const body = document.querySelector('#root')

    body.scrollIntoView(
      {
        behavior: 'smooth',
      },
      500
    )
  }, [])

  return (
    <>
      <Loader />
      <CNav />

      <div className='model-container-large'>
        <DSlider
          carPath={carPath}
          selectedCar={paint.imgs}
          selectedInterior={interior.interiorImg}
        />

        <div className='model-box'>
          <motion.img
            src={`${carPath}/felne/${paint.imgs[2]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.6,
              duration: 0.5,
            }}
          />

          <motion.div
            className='model-info'
            variants={modelInfoVariants}
            initial='enter'
            animate='animate'
            transition={{ duration: 0.8, delay: 3 }}
          >
            <Name
              name={`Your ${model.name}`}
              delivery={`Est. Delivery: ${model.estDelivery}`}
            />

            <SelectedModelSpecs
              name={model.name}
              tow={model.specification.towType}
              priceDesc={model.priceDesc}
              color={paint.selected}
              colorPrice={paint.priceDesc}
              wheel={wheel.selected}
              wheelPrice={wheel.priceDesc}
              interior={interior.selected}
              interiorPrice={interior.priceDesc}
              door={door.selected}
              doorPrice={door.priceDesc}
              seat={seat.selected}
              seatPrice={seat.priceDesc}
              realPrice={vehiclePrice}
              getNumberWithCommas={getNumberWithCommas}
            />

            <PriceSelector
              prices={['Cash', 'Lease', 'Loan']}
              active={activeMethod}
              setActive={setActiveMethod}
            />

            {activeMethod === 0 && (
              <CashPayment
                realPrice={vehiclePrice}
                vehicleCashPrice={vehicleCashPrice}
                getNumberWithCommas={getNumberWithCommas}
              />
            )}
            {activeMethod === 1 && (
              <PaymentMethod
                h3={'Est. lease payment'}
                h3b={'$629 /mo'}
                desc1={'$4,500 down, 36 months, 10,000 miles'}
                desc2={'Excluding taxes & other fees'}
                desc3={'Available in select states'}
                desc4={'Electronic payments required'}
                desc5={'Includes $1,200 destination and doc fee'}
              />
            )}
            {activeMethod === 2 && (
              <PaymentMethod
                h3={'Est. loan payment'}
                h3b={'$795 /mo'}
                desc1={'$4,500 (8%) down, 2.74% APR, 72 months'}
                desc2={'Excluding taxes & other fees'}
                desc4={'Electronic payments required'}
                desc3={'Includes $1,200 destination and doc fee'}
                desc5={''}
              />
            )}

            <AnimatePresence>
              {!showCheckout && (
                <button
                  className='order-btn'
                  onClick={() => setShowCheckout(true)}
                >
                  Order
                </button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showCheckout && (
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Checkout name={model.name} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Paymentpage
