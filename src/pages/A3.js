import React, { useRef, useEffect, useState } from 'react'
import ModelLayout from '../layouts/ModelLayout'
import { motion } from 'framer-motion'

// components
import Description1 from './../components/Model/Description1'
import Description2 from './../components/Model/Description2'

// img
import safety from './../images/bgs/a3/a3dimn.jpeg'
import a3config from './../images/bgs/a3/a3config.webp'
import a3test from './../images/bgs/models/side/a3sideblack.png'

const A3 = () => {
  const ref = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ref4 = useRef()

  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)
  const [active4, setActive4] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActive1(true)
      } else {
        setActive1(false)
      }
    })
    observer.observe(ref.current)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActive2(true)
      } else {
        setActive2(false)
      }
    })
    observer.observe(ref2.current)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActive3(true)
      } else {
        setActive3(false)
      }
    })
    observer.observe(ref3.current)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        setActive4(true)
      } else {
        setActive4(false)
      }
    })
    observer.observe(ref4.current)
  }, [])

  const a3Spec = {
    topSpeed: '220',
    fuel: 'Diesel',
    oneToHund: '5.2',
  }

  const s3Spec = {
    desc1: '451',
    desc2: 'Petrol',
    desc3: '2.9',
    span1: 'km/h',
    span2: '',
    span3: 's',
    h31: 'Top Speed',
    h32: 'Fuel',
    h33: '0-100km/h',
    h61: 'Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds ',
    h62: ' Improved handling and aerodynamics allow for a top speed of 162 mph ',
    h63: ' Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
  }

  const rear = {
    desc1: '380',
    desc2: 'Sensor',
    desc3: '670',
    span1: 'l',
    span2: '',
    span3: 'cm',
    h31: 'Boot capacity',
    h32: 'Open/Close',
    h33: 'Height',
    h61: 'Independent motors digitally control torque to the front and rear wheels ',
    h62: ' Dual motors respond to changing conditions in as little as 10 milliseconds ',
    h63: 'Unparalleled traction and control, in all weather conditions ',
  }

  const interior = {
    desc1: '15',
    desc2: 'WiFi',
    desc3: 'All-glass',
    span1: 'inch',
    span2: '',
    span3: '',
    h31: 'Touch Display',
    h32: 'Software',
    h33: 'Roof',
    h61: 'A touchscreen display designed to improve over time ',
    h62: 'Over-the-air software updates introduce new features, functionality and performance ',
    h63: 'An expansive Glass Roof provides more headroom and UV protection ',
  }

  const showAnimation = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.7,
      },
    },
    exit: {
      opactiy: 0,
    },
  }

  const showAnimation2 = {
    initial: {
      opacity: 0,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
    exit: {
      opactiy: 0,
    },
  }

  return (
    <ModelLayout>
      <div className='model-page'>
        <div className='model-banner model-a3'>
          <Description1
            name={'Audi A3'}
            specification={a3Spec}
            btn={'Order Now'}
          />
        </div>

        <div className='model-intro-text mit1'>
          <div>
            <h5>Safety</h5>
            <h2>Built for safety</h2>

            <div>
              <p>
                Safety is the most important part of every Tesla. We design our
                vehicles to exceed safety standards.
              </p>
            </div>

            <div>
              <h3>5-star Rating</h3>
              <p>
                Model 3 achieved NHTSA 5-star safety ratings in every category
                and subcategory.
              </p>
            </div>

            <div>
              <h3>Top Safety Pick+</h3>
              <p>
                Model 3 received the IIHS Top Safety Pick+ award, with top
                ratings in all crashworthiness and front crash prevention
                categories.
              </p>
            </div>
          </div>

          <div>
            <img src={safety} alt={safety} />

            <ul>
              <li>
                <h3>
                  <span>1</span>Rigid Structure
                </h3>
                <p>
                  A material mix of aluminum and steel help to achieve the best
                  structural rigidity, and increased occupant safety.
                </p>
              </li>
              <li>
                <h3>
                  <span>2</span>Impact Protection
                </h3>
                <p>
                  Combined with impact-absorbing rails and center pillar
                  reinforcements, the strength and support of the rigid battery
                  pack provides protection from every side.
                </p>
              </li>
              <li>
                <h3>
                  <span>3</span>Very Low Rollover Risk
                </h3>
                <p>
                  The position and weight of the floor-mounted battery pack
                  provides a very low center of gravity—allowing for a very low
                  rollover risk.
                </p>
              </li>
            </ul>

            <button>Order Now</button>
          </div>
        </div>

        <div className='model-banner model-s3' ref={ref}>
          {active1 && (
            <Description2
              name={'Audi S3'}
              specification={s3Spec}
              showAnimation={showAnimation}
            />
          )}
        </div>

        <div className='model-intro-text mit2'>
          <div>
            <h5>Performance</h5>
            <h2>Quickest Acceleration</h2>
          </div>

          <div>
            <p>
              Model 3 comes with the option of dual motor all-wheel drive, 20”
              Überturbine Wheels and Performance Brakes for total control in all
              weather conditions. A carbon fiber spoiler improves stability at
              high speeds, all allowing Model 3 to accelerate from 0-60 mph* in
              as little as 3.1 seconds.
            </p>
          </div>
        </div>

        <div className='model-banner rear-a3' ref={ref2}>
          {active2 && (
            <Description2
              showAnimation={showAnimation}
              name={''}
              specification={rear}
            />
          )}
        </div>

        <div className='model-intro-text mit2'>
          <div>
            <h5>Boot Space</h5>
            <h2>Biggest So Far!</h2>
          </div>

          <div>
            <p>
              Thanks to a boot volume of 380 l and comfortable luggage loading
              and unloading equipment, the new Audi A3 Sportback offers
              exceptional spaciousness. The higher interior height of the
              vehicle and the free space in the leg area in the front and rear
              of the vehicle will ensure an even higher level of comfort and
              functionality.
            </p>
          </div>
        </div>

        <div className='model-intro-text mit2'>
          <div>
            <h5>Autopilot</h5>
            <h2>Future of Driving</h2>
          </div>

          <div>
            <p style={{ marginBottom: '6rem' }}>
              Autopilot enables your car to steer, accelerate and brake
              automatically within its lane. Full Self-Driving Capability
              introduces additional features and improves existing functionality
              to make your car more capable over time including:
            </p>

            <ul>
              <li>
                <h3>Features</h3>
                <p>
                  A material mix of aluminum and steel help to achieve the best
                  structural rigidity, and increased occupant safety.
                </p>
              </li>
              <li>
                <h3>Full Self-Driving Hardware</h3>
                <p>
                  Every new Model 3 comes standard with advanced hardware
                  capable of providing Autopilot features today, and full
                  self-driving capabilities in the future—through software
                  updates designed to improve functionality over time.
                </p>
              </li>
              <li>
                <h3>The Future of Autopilot</h3>
                <p>
                  All Tesla vehicles have the hardware needed in the future for
                  full self-driving in almost all circumstances, at a safety
                  level we believe will be at least twice as good as the average
                  human driver.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='model-banner interior-a3' ref={ref3}>
          {active3 && (
            <Description2
              showAnimation={showAnimation}
              name={''}
              specification={interior}
            />
          )}
        </div>

        <div className='model-intro-text mit2'>
          <div>
            <h5>Interior</h5>
            <h2>Built Around the Driver</h2>
          </div>

          <div>
            <p>
              The inside of Model 3 is unlike any other car. You can use your
              smartphone as a key, and access all driver controls in the central
              15-inch touchscreen. The all-glass roof extends from front to
              back, creating a sense of openness from every seat.
            </p>
          </div>
        </div>

        <div className='model-banner interior2-a3' />
        <div className='black-container-parent'>
          <div className='model-intro-text black mit3'>
            <div>
              <h5>Interior</h5>
              <h2>Better Over Time</h2>
            </div>
            <div>
              <p>
                A minimal interior aesthetic—with all controls accessible on the
                central 15-inch touchscreen and the steering wheel.
              </p>

              <p>
                The forward-designed instrument panel provides even more legroom
                in the front, for a spacious passenger cabin.
              </p>

              <p>
                The premium center console is modern and efficient, with plenty
                of covered storage and charging for two smartphones.
              </p>

              <p>
                Access everything on the 15-inch touchscreen—designed to improve
                over time with regular software updates, introducing new
                features, functionality and performance.
              </p>
            </div>
          </div>
        </div>
        <div className='black-container-parent'>
          <div className='black-container'>
            <div className='one'>
              {' '}
              <div className='model-banner interior3-a3' />
              <div className='model-intro-text black'>
                <h2>Premium Interior</h2>
                <div>
                  <p>
                    A better driving experience—with our full Glass Roof, a
                    custom audio system and premium seating throughout.
                  </p>
                </div>
              </div>
            </div>
            <div className='two'>
              {' '}
              <div className='model-banner interior4-a3' />
              <div className='model-intro-text black'>
                <h2>All-Weather Comfort</h2>
                <div>
                  <p>
                    Enhance comfort and convenience with front and rear seat
                    heaters, and heated side mirrors.
                  </p>
                </div>
              </div>
            </div>
            <div className='three'>
              <div className='model-banner interior5-a3' />
              <div className='model-intro-text black'>
                <h2>Pristine Sound</h2>
                <div>
                  <p>
                    Our premium audio system features 14 speakers, including a
                    subwoofer and dual amplifiers, for interior sound dynamics
                    comparable to a recording studio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='model-intro-text black'>
          <div className='specs-parent' ref={ref4}>
            <img src={a3config} alt='/' />
            <div className='specs-flex'>
              {active4 && (
                <>
                  <motion.div
                    variants={showAnimation2}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='specs-cont'
                  >
                    <div className='specs-heads'>
                      <h2>
                        Audi A3 <span>Specs</span>
                      </h2>
                    </div>

                    <div className='specs-containers'>
                      <div>
                        <h5>Battery</h5>
                        <h6>Range</h6>
                      </div>

                      <div>
                        <h5>Acceleration</h5>
                        <h6>3.1s 0-60 mph</h6>
                      </div>

                      <div>
                        <h5>Range</h5>
                        <h6>315 miles (EPA est.)</h6>
                      </div>

                      <div>
                        <h5>Drive</h5>
                        <h6>Dual Motor All-Wheel Drive</h6>
                      </div>

                      <div>
                        <h5>Seating</h5>
                        <h6>5 Adults</h6>
                      </div>

                      <div>
                        <h5>Weight</h5>
                        <h6>4,048 lbs</h6>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={showAnimation2}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='specs-cont'
                  >
                    <div className='specs-heads'>
                      <h2>
                        Audi S3 <span>Specs</span>
                      </h2>
                    </div>

                    <div className='specs-containers'>
                      <div>
                        <h5>Battery</h5>
                        <h6>Range</h6>
                      </div>

                      <div>
                        <h5>Acceleration</h5>
                        <h6>3.1s 0-60 mph</h6>
                      </div>

                      <div>
                        <h5>Range</h5>
                        <h6>315 miles (EPA est.)</h6>
                      </div>

                      <div>
                        <h5>Drive</h5>
                        <h6>Dual Motor All-Wheel Drive</h6>
                      </div>

                      <div>
                        <h5>Seating</h5>
                        <h6>5 Adults</h6>
                      </div>

                      <div>
                        <h5>Weight</h5>
                        <h6>4,048 lbs</h6>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </div>

          <h1>Experience Audi A3</h1>

          <div className='specs-parent'>
            <button>Order Now</button>

            <img src={a3test} alt='' />
          </div>
        </div>
      </div>
    </ModelLayout>
  )
}

export default A3
