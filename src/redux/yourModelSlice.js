import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  models: {
    a3: {
      basicModel: {
        name: 'Audi A3',
        estDelivery: 'May 2023',
        price: [30000, 28200],
        priceDesc: ['$30.000', '$28.200'],
        specifications: {
          topSpeed: '220',
          fuel: 'Diesel',
          oneToHund: '5.2',
          towType: 'Front Wheel Drive',
        },
      },
      hybridModel: {
        name: 'Audi A3 S Line',
        estDelivery: 'June 2023',
        price: [33300, 30200],
        priceDesc: ['$33.300', '$30.200'],
        specifications: {
          topSpeed: '270',
          fuel: 'Hybrid',
          oneToHund: '4.3',
          towType: 'Dual Motor All Wheel Drive',
        },
      },
      sportModel: {
        name: 'Audi S3',
        estDelivery: 'November 2023',
        price: [55500, 49350],
        priceDesc: ['$55.500', '$49.350'],
        specifications: {
          topSpeed: '451',
          fuel: 'Petrol',
          oneToHund: '2.9',
          towType: 'All Wheel Drive',
        },
      },
      performanceFeatureDetails: {},
      paints: [
        [
          ['a3front.png', 'a3side.png', 'a3felna1.png'],
          ['a3front2.png', 'a3side2.png', 'a3felna2.png'],
          'white.jpeg',
          'Included',
          'Ibis White',
          0,
        ],
        [
          ['a3frontblack.png', 'a3sideblack.png', 'a3felna1black.png'],
          ['a3frontblack2.png', 'a3sideblack2.png', 'a3felna2black.png'],
          'black.jpeg',
          '$1250',
          'Mythos Black',
          1250,
        ],
      ],
      wheels: [
        ['felna1.jpeg', 'Included', '18" Sport Wheels', 0],
        ['felna2.jpeg', '$1200', '18" Alu Wheels', 1200],
      ],
      interiors: [
        ['a3interior2.png', 'interior2.jpeg', 'Included', 'Black Interior', 0],
        ['a3interior1.png', 'interior1.jpeg', '$899', 'Red Interior', 899],
      ],
      doors: [
        ['5', 'Included', 'Hatchbag', 0],
        ['5', '$600', 'Limousine', 600],
        ['3', '$1550', 'Coupe', 1550],
      ],
      seats: [['5', 'Included', 'Five Seat Interior', 0]],
      interiorFeautureDetails: {},
      autopilot: {},
    },
    q5: {
      basicModel: {
        name: 'Audi Q5',
        estDelivery: 'May 2023',
        price: [53000, 50200],
        priceDesc: ['$53.000', '$50.200'],
        specifications: {
          topSpeed: '220',
          fuel: 'Diesel',
          oneToHund: '5.2',
          towType: 'Front Wheel Drive',
        },
      },
      hybridModel: {
        name: 'Audi Q5 S Line',
        estDelivery: 'June 2023',
        price: [63300, 60200],
        priceDesc: ['$63.300', '$60.200'],
        specifications: {
          topSpeed: '270',
          fuel: 'Hybrid',
          oneToHund: '4.3',
          towType: 'Dual Motor All Wheel Drive',
        },
      },
      sportModel: {
        name: 'Audi Q RS5',
        estDelivery: 'November 2023',
        price: [155500, 149350],
        priceDesc: ['$155.500', '$149.350'],
        specifications: {
          topSpeed: '451',
          fuel: 'Petrol',
          oneToHund: '2.9',
          towType: 'All Wheel Drive',
        },
      },
      performanceFeatureDetails: {},
      paints: [
        [
          ['q5front.webp', 'q5side.webp', 'q5felna1.webp'],
          ['q5front2.webp', '5side2.webp', 'q5felna1.webp'],
          'white.jpeg',
          'Included',
          'Ibis White',
          0,
        ],
        [
          ['q5frontblack.webp', 'q5sideblack.webp', 'q5felna1black.webp'],
          ['q5frontblack2.webp', 'q5sideblack2.webp', 'q5felna2black.webp'],
          'black.jpeg',
          '$1250',
          'Mythos Black',
          1250,
        ],
      ],
      wheels: [
        ['felnaq51.jpeg', 'Included', '20" Sport Wheels', 0],
        ['felnaq52.jpeg', '$2000', '20" Alu Wheels', 1200],
      ],
      interiors: [
        ['q5interior2.webp', 'q5i2.jpeg', 'Included', 'Black Interior', 0],
        ['q5interior1.webp', 'q5i1.jpeg', '$899', 'Red Interior', 899],
      ],
      doors: [['5', 'Included', 'Sportsback', 0]],
      seats: [
        ['5', 'Included', 'Five Seat Interior', 0],
        ['7', '$2800', 'Seven Seat Interior', 2800],
      ],
      interiorFeautureDetails: {},
      autopilot: {},
    },
  },

  customModel: localStorage.getItem('yourCustomModel')
    ? JSON.parse(localStorage.getItem('yourCustomModel'))
    : {},

  isRimsIntersecting: false,
  isInteriorIntersecting: false,
}

export const yourModelSlice = createSlice({
  name: 'yourModel',
  initialState,
  reducers: {
    fetchModel: (state, { payload }) => {
      console.log(payload)
    },
    createYourCustomModel: (state, { payload }) => {
      state.customModel = payload
      localStorage.setItem('yourCustomModel', JSON.stringify(payload))
    },
    rimsIntersecting: (state, { payload }) => {
      state.isRimsIntersecting = payload
    },
    interiorIntesecting: (state, { payload }) => {
      state.isInteriorIntersecting = payload
    },
  },
})
export const {
  createYourCustomModel,
  rimsIntersecting,
  interiorIntesecting,
  fetchModel,
} = yourModelSlice.actions
export default yourModelSlice.reducer
