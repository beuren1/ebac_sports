import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../features/cart/cartSlice.js'

export default function Header({ onOpenCart }) {
  const count = useSelector(selectCartCount)
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <span className="logo" aria-hidden="true"></span>
          EBAC <span className="badge">SPORTS</span>
        </div>
        <nav className="nav">
          <a href="#">Início</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="btn cart-btn" onClick={onOpenCart}>
          🛒 Carrinho
          <span className="count">{count}</span>
        </button>
      </div>
    </header>
  )
}