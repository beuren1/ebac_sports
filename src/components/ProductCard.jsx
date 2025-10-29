import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice.js'

export default function ProductCard({ p }) {
  const dispatch = useDispatch()

  return (
    <div className="card">
      <img src={p.image} alt={p.title} loading="lazy" />
      <div className="body">
        <span className="small">{p.brand} · {p.category}</span>
        <strong>{p.title}</strong>
        <div className="price">
          <strong>R$ {p.price.toFixed(2)}</strong>
          {p.oldPrice && <span className="small"><s>R$ {p.oldPrice.toFixed(2)}</s></span>}
        </div>
        <button
          className="btn primary block"
          onClick={() => dispatch(addItem({ id:p.id, title:p.title, price:p.price, image:p.image }))}
        >
          + Adicionar
        </button>
      </div>
    </div>
  )
}