import React from 'react'

const SelectedModelSpecs = ({
  name,
  tow,
  priceDesc,
  color,
  colorPrice,
  wheel,
  wheelPrice,
  interior,
  interiorPrice,
  door,
  doorPrice,
  seat,
  seatPrice,
  realPrice,
  getNumberWithCommas,
}) => {
  return (
    <div className='selected-model-specs'>
      <div>
        <h4>
          {name} {tow}
        </h4>
        <h4>{priceDesc}</h4>
      </div>

      <div>
        <h4>{color}</h4>
        <h4>{colorPrice}</h4>
      </div>

      <div>
        <h4>{wheel}</h4>
        <h4>{wheelPrice}</h4>
      </div>

      <div>
        <h4>{interior}</h4>
        <h4>{interiorPrice}</h4>
      </div>

      <div>
        <h4>{door}</h4>
        <h4>{doorPrice}</h4>
      </div>

      <div>
        <h4>{seat}</h4>
        <h4>{seatPrice}</h4>
      </div>

      <div>
        <h4>Autopilot</h4>
        <h4>Included</h4>
      </div>

      <div>
        <h4>30-Day Premium Conectivity</h4>
        <h4>Included</h4>
      </div>

      <div>
        <h4>Vehicle Price</h4>
        <h4>${getNumberWithCommas(realPrice)}</h4>
      </div>
    </div>
  )
}

export default SelectedModelSpecs
