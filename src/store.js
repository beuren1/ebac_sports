import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice.js'
import { productsApi } from './features/api/productsApi.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefault) => getDefault().concat(productsApi.middleware)
})