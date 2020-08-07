import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './lib/slices/counterSlice'
import authReducer from './lib/slices/authSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
  devTools: true,
})
