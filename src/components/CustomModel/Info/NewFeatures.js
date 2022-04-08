import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { createYourCustomModel } from '../../../redux/yourModelSlice'

const NewFeatures = ({ createCustomModel }) => {
  const dispatch = useDispatch()
  const params = useParams()

  const model = params.model

  return (
    <>
      <div className='model-self-driving'>
        <h2 className='self-d-heading'>Full Self-Driving Capability</h2>
        <h6>$12,000</h6>
        <ul>
          <li>Navigate on Autopilot</li>
          <li>Auto Lane Change</li>
          <li>Autopark</li>
          <li>Summon</li>
          <li>Full Self-Driving Computer</li>
          <li>Traffic Light and Stop Sign Control</li>
        </ul>
      </div>

      <div className='model-comming-soon'>
        <h5>Coming soon</h5>
        <ul>
          <li>Autosteer od city streets</li>
        </ul>
        <p>
          The currently enabled features require active driver supervision and
          do not make the vehicle autonomous. The activation and use of these
          features are dependent on achieving reliability far in excess of human
          drivers as demonstrated by billions of miles of experience, as well as
          regulatory approval, which may take longer in some jurisdictions. As
          these self-driving features evolve, your car will be continuously
          upgraded through over-the-air software updates.
        </p>
      </div>

      <div className='model-order'>
        <h1>Order Your Model</h1>
        <h4>Est.Delivery: January 2023</h4>

        <Link to='/design/payment'>
          <button
            onClick={() => dispatch(createYourCustomModel(createCustomModel))}
          >
            Continue to payment
          </button>
        </Link>
      </div>
    </>
  )
}

export default NewFeatures
