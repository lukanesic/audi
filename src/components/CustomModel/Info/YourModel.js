import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const YourModel = () => {
  const { yourCustomModel } = useSelector((state) => state.customModel)

  const [[activeColor, activeColorDesc], setActiveColor] = useState([])
  const [rimsPrice, setRimsPrice] = useState()
  const [interiorPrice, setInteriorPrice] = useState()

  const {
    name,
    delivery,
    fuel,
    oneToHund,
    speed,
    price,
    paint,
    color,
    rims,
    interior,
    path,
  } = yourCustomModel.customModel

  useEffect(() => {
    if (color === 'white') {
      setActiveColor(['Ibis White', 'Included'])
    } else if (color === 'black') {
      setActiveColor(['Mythos Black', '$1200'])
    }
  }, [])

  useEffect(() => {
    if (rims === '19" Alu Wheels') {
      setRimsPrice('$2450')
    } else {
      setRimsPrice('Included')
    }
  }, [])

  useEffect(() => {
    if (interior === 'Black Interior') {
      setInteriorPrice('Included')
    } else {
      setInteriorPrice('855')
    }
  }, [])

  return (
    <>
      <h2 className='your-model-h2'>Your {name}</h2>
      <div className='your-model-container'>
        <div className='your-model-left'>
          <h6>
            {name} - {fuel}
          </h6>
          <h6>{activeColor && activeColor}</h6>
          <h6>Est.Delivery</h6>
          <h6>{rims}</h6>
          <h6>{interior}</h6>
          <h6>30-day Premium Connectivity Trial</h6>
          <h6>Autopilot</h6>
        </div>

        <div className='your-model-right'>
          <h6>${price}</h6>
          <h6>{activeColorDesc && activeColorDesc}</h6>
          <h6>{delivery}</h6>
          <h6>{rimsPrice}</h6>
          <h6>${interiorPrice}</h6>
          <h6>Included</h6>
          <h6>Included</h6>
        </div>
      </div>
    </>
  )
}

export default YourModel
