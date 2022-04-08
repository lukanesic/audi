import React from 'react'

const PaymentMethod = ({ h3, h3b, desc1, desc2, desc3, desc4, desc5 }) => {
  return (
    <div className='cash-payment'>
      <div>
        <h3>{h3}</h3>
        <h3>{h3b}</h3>
      </div>

      <p>{desc1}</p>
      <p>{desc5}</p>
      <p>{desc2}</p>
      <p>{desc3}</p>
      <p>{desc4}</p>
    </div>
  )
}

export default PaymentMethod
