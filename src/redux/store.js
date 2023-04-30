import { configureStore } from '@reduxjs/toolkit'
import canastaReducer from "./reducer/canastaSlice"
import restaurantReducer from "./reducer/restaurantSlice"

export const store = configureStore({
  reducer: {
    canasta: canastaReducer, 
    restaurant: restaurantReducer
  },
});