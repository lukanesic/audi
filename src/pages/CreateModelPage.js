import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { motion } from 'framer-motion'

// Components
import Loader from '../components/CustomModel/Loader'
import CNav from '../components/CustomModel/Nav/CNav'
import DSlider from '../components/CustomModel/DSlider'
import Name from '../components/CustomModel/Info/Name'
import PriceSelector from '../components/CustomModel/Info/PriceSelector'
import Specs from '../components/CustomModel/Info/Specs'
import WheelSelector from '../components/CustomModel/Info/WheelSelector'
import Paint from '../components/CustomModel/Info/Paint'
import Rims from '../components/CustomModel/Info/Rims'
import Interior from '../components/CustomModel/Info/Interior'
import Doors from '../components/CustomModel/Info/Doors'
import NewFeatures from '../components/CustomModel/Info/NewFeatures'

const CreateModelPage = () => {
  const [activePrice, setActivePrice] = useState(0)
  const [activeSpec, setActiveSpec] = useState('basicModel')
  const [activePaint, setActivePaint] = useState(0)
  const [activeWheels, setActiveWheels] = useState(0)
  const [activeInterior, setActiveInterior] = useState(0)
  const [activeDoors, setActiveDoors] = useState(0)
  const [activeSeats, setActiveSeats] = useState(0)

  const { models, model2 } = useSelector((state) => state.yourModel)
  const params = useParams()

  const model = models[params.model]

  const {
    basicModel,
    hybridModel,
    sportModel,
    paints,
    wheels,
    interiors,
    doors,
    seats,
  } = model

  const createCustomModel = {
    model: {
      name: model[activeSpec].name,
      estDelivery: model[activeSpec].estDelivery,
      price: model[activeSpec].price[activePrice],
      priceDesc: model[activeSpec].priceDesc[activePrice],
      specification: model[activeSpec].specifications,
    },
    paint: {
      imgs: paints[activePaint][activeWheels],
      selected: paints[activePaint][4],
      priceDesc: paints[activePaint][3],
      priceToCalc: paints[activePaint][5],
    },
    wheel: {
      priceDesc: wheels[activeWheels][1],
      selected: wheels[activeWheels][2],
      priceToCalc: wheels[activeWheels][3],
    },
    interior: {
      interiorImg: interiors[activeInterior][0],
      priceDesc: interiors[activeInterior][2],
      selected: interiors[activeInterior][3],
      priceToCalc: interiors[activeInterior][4],
    },
    door: {
      priceDesc: doors[activeDoors][1],
      selected: doors[activeDoors][2],
      priceToCalc: doors[activeDoors][3],
    },
    seat: {
      priceDesc: seats[activeSeats][1],
      selected: seats[activeSeats][2],
      priceToCalc: seats[activeSeats][3],
    },
  }

  const carPath = './../images/bgs/models'

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
          selectedCar={paints[activePaint][activeWheels]}
          selectedInterior={interiors[activeInterior][0]}
        />

        <div className='model-box'>
          <motion.img
            src={`${carPath}/front/${paints[activePaint][activeWheels][0]}`}
            alt={`${paints[activePaint][activeWheels][0]}`}
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
              name={model[activeSpec].name}
              delivery={`Est. Delivery: ${model[activeSpec].estDelivery}`}
            />

            <PriceSelector
              prices={['Purchase Price', 'Potential Savings']}
              active={activePrice}
              setActive={setActivePrice}
            />

            <Specs
              topS={model[activeSpec].specifications.topSpeed}
              fuel={model[activeSpec].specifications.fuel}
              oneToHund={model[activeSpec].specifications.oneToHund}
            />

            <WheelSelector
              priceSelector={activePrice}
              active={activeSpec}
              setActive={setActiveSpec}
              setModal={''}
              model={model}
            />
          </motion.div>
          <motion.img
            src={`${carPath}/side/${paints[activePaint][activeWheels][1]}`}
            alt={`${paints[activePaint][activeWheels][1]}`}
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
            <Paint
              paints={paints}
              active={activePaint}
              setActive={setActivePaint}
              carPath={carPath}
            />
          </motion.div>
          <motion.img
            src={`${carPath}/felne/${paints[activePaint][activeWheels][2]}`}
            alt={`${paints[activePaint][activeWheels][2]}`}
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
            <Rims
              active={activeWheels}
              setActive={setActiveWheels}
              wheels={wheels}
              carPath={carPath}
            />
          </motion.div>
          <motion.img
            src={`${carPath}/interior/${interiors[activeInterior][0]}`}
            alt={`${interiors[activeInterior][0]}`}
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
            <Interior
              active={activeInterior}
              setActive={setActiveInterior}
              interiors={interiors}
              carPath={carPath}
            />
          </motion.div>
          .
          <motion.div
            className='model-info'
            variants={modelInfoVariants}
            initial='enter'
            animate='animate'
            transition={{ duration: 0.8, delay: 3 }}
          >
            <Doors
              active={activeDoors}
              setActive={setActiveDoors}
              doors={doors}
              carPath={carPath}
              head={'Doors'}
            />
          </motion.div>
          <motion.div
            className='model-info'
            variants={modelInfoVariants}
            initial='enter'
            animate='animate'
            transition={{ duration: 0.8, delay: 3 }}
          >
            <Doors
              active={activeSeats}
              setActive={setActiveSeats}
              doors={seats}
              carPath={carPath}
              head={'Seats'}
            />

            <NewFeatures createCustomModel={createCustomModel} />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default CreateModelPage
