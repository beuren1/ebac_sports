import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [] // {id, title, price, image, qty}
}

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      const existing = state.items.find(i => i.id === item.id)
      if (existing) {
        existing.qty += item.qty ?? 1
      } else {
        state.items.push({ ...item, qty: item.qty ?? 1 })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload
      const it = state.items.find(i => i.id === id)
      if (it) it.qty = Math.max(1, qty)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, updateQty, clearCart } = slice.actions
export default slice.reducer

export const selectCartCount = (state) => state.cart.items.reduce((acc, i) => acc + i.qty, 0)
export const selectCartTotal = (state) => state.cart.items.reduce((acc, i) => acc + i.qty * i.price, 0)