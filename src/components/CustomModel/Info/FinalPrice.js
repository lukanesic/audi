import React from 'react'
import { useSelector } from 'react-redux'

const FinalPrice = () => {
  const { priceSelector, yourCustomModel } = useSelector(
    (state) => state.customModel
  )

  const { price } = yourCustomModel.customModel

  return (
    <div className='final-price'>
      {priceSelector === 0 && (
        <div className='final-price-container'>
          <div className='final-price-left'>
            <h6>Vehicle Price</h6>
            <p>Destination & doc free</p>
            <p>Order fee</p>
          </div>
          <div className='final-price-right'>
            <h6>$30,340</h6>
            <p>$1,200</p>
            <p>$250</p>
          </div>
        </div>
      )}
      {priceSelector === 1 && (
        <div className='final-price-container'>
          <div className='final-price-left'>
            <h6>Est.lease payment</h6>
            <p>
              $4,500 down, 36 months, 10,000 miles Includes $1,200 destination
              and doc fee Excluding taxes & other fees
            </p>
            <p>Available in select states Electronic payments required</p>
          </div>
          <div className='final-price-right'>
            <h6>$629 /mo</h6>
          </div>
        </div>
      )}
      {priceSelector === 2 && (
        <div className='final-price-container'>
          <div className='final-price-left'>
            <h6>Est. loan payment</h6>
            <p>
              $4,500 (8%) down, 2.74% APR, 72 months Includes $1,200 destination
              and doc fee
            </p>
            <p>Excluding taxes & other fees Electronic payments required</p>
          </div>
          <div className='final-price-right'>
            <h6>$795 /mo</h6>
          </div>
        </div>
      )}
    </div>
  )
}

export default FinalPrice
