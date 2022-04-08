import React from 'react'

const Checkout = ({ name }) => {
  return (
    <div className='checkout'>
      <h1>Enter account details</h1>
      <div className='checkout-container'>
        <div className='c-c-box'>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' />
        </div>
        <div className='c-c-box'>
          <label htmlFor='lname'>Last Name</label>
          <input type='text' id='lname' />
        </div>

        <div className='c-c-box'>
          <label htmlFor='email'>Email Address</label>
          <input type='text' id='email' />
        </div>
        <div className='c-c-box'>
          <label htmlFor='cemail'>Confirm Email Address</label>
          <input type='text' id='cemail' />
          <h5>We won't spam you in any way</h5>
        </div>

        <div className='c-c-box'>
          <label htmlFor='phone'>Mobile Phone Number</label>
          <div className='phone-box'>
            <select id='phone'>
              <option value='US'>US +1</option>
              <option value='SRB'>SRB +381</option>
            </select>
            <input type='text' id='phone' placeholder='123 456 78' />
          </div>
          <h5 className='agree-head'>
            By entering my account details above, I agree to be contacted about
            Tesla products, including through automated calls or texts. This is
            not a condition of purchase.
          </h5>
        </div>
      </div>

      <h1>Card</h1>
      <div className='checkout-container'>
        <div className='c-c-box'>
          <label htmlFor='name'>Name on Card</label>
          <input type='text' id='name' />
        </div>
        <div className='c-c-box'>
          <label htmlFor='lname'>Card Number</label>
          <input type='text' id='lname' />
        </div>
        <div className='c-c-box'>
          <label htmlFor='em'>Expiration Month</label>
          <input type='text' id='em' />
        </div>
        <div className='c-c-box'>
          <label htmlFor='ey'>Expiration Year</label>
          <input type='text' id='ey' />
        </div>
        <div className='c-c-box'>
          <label htmlFor='cvv'>CVV</label>
          <input type='text' id='cvv' />
        </div>
        <div className='c-c-box'>
          <label htmlFor='bzc'>Billing Zip Code</label>
          <input type='text' id='bzc' />
        </div>

        <div className='d-tdy'>
          <h4>Due Today</h4>
          <h4>$250</h4>
        </div>
        <h5>Non-refundable Order Fee</h5>

        <h5>
          By placing this order, I agree to the{' '}
          <span> {name} Order Agreement, Terms of Use </span>, and{' '}
          <span>Privacy Notice.</span>
        </h5>
      </div>

      <button>Place Order</button>
    </div>
  )
}

export default Checkout
