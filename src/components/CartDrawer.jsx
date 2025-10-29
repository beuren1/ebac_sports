import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQty, clearCart, selectCartTotal } from '../features/cart/cartSlice.js'

export default function CartDrawer({ open, onClose }){
  const items = useSelector(s => s.cart.items)
  const total = useSelector(selectCartTotal)
  const dispatch = useDispatch()

  return (
    <aside className={'drawer' + (open ? ' open' : '')} role="dialog" aria-modal="true">
      <div className="head">
        <strong>Seu carrinho</strong>
        <button className="btn" onClick={onClose}>Fechar</button>
      </div>
      <div className="content">
        {items.length === 0 && <p className="small">Seu carrinho está vazio.</p>}
        {items.map(it => (
          <div className="cart-item" key={it.id}>
            <img src={it.image} alt={it.title} />
            <div>
              <div style={{fontWeight:700}}>{it.title}</div>
              <div className="small">R$ {it.price.toFixed(2)}</div>
              <button className="btn" onClick={()=>dispatch(removeItem(it.id))}>Remover</button>
            </div>
            <div className="qty">
              <button className="btn" onClick={()=>dispatch(updateQty({id:it.id, qty: it.qty-1}))}>-</button>
              <strong>{it.qty}</strong>
              <button className="btn" onClick={()=>dispatch(updateQty({id:it.id, qty: it.qty+1}))}>+</button>
            </div>
          </div>
        ))}
        {items.length > 0 && (
          <div className="total">
            <div>
              <div className="small">Total</div>
              <strong>R$ {total.toFixed(2)}</strong>
            </div>
            <div style={{display:'flex', gap:8}}>
              <button className="btn" onClick={()=>dispatch(clearCart())}>Limpar</button>
              <button className="btn primary">Finalizar</button>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}