import { configureStore } from '@reduxjs/toolkit'
import yourModelSlice from './yourModelSlice'

export default configureStore({
  reducer: {
    yourModel: yourModelSlice,
  },
})
