import React from 'react'

const CashPayment = ({ getNumberWithCommas, realPrice, vehicleCashPrice }) => {
  return (
    <div className='cash-payment'>
      <div>
        <h3>Vehicle Price</h3>
        <h3>${getNumberWithCommas(realPrice)}</h3>
      </div>

      <div>
        <h4>Destination & doc fee</h4>
        <h4>$1200</h4>
      </div>

      <div
        style={{
          borderBottom: '1px solid #cecece',
          padding: '0 0 .8rem',
        }}
      >
        <h4>Order fee</h4>
        <h4>$250</h4>
      </div>

      <div>
        <h3>Your Model</h3>
        <h3>${getNumberWithCommas(vehicleCashPrice)}</h3>
      </div>

      <div>
        <p>Excluding taxes and other fees</p>
      </div>
    </div>
  )
}

export default CashPayment
