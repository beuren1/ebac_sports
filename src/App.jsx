import React, { useState } from 'react'
import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'
import CartDrawer from './components/CartDrawer.jsx'

export default function App(){
  const [open, setOpen] = useState(false)
  return (
    <>
      <Header onOpenCart={()=>setOpen(true)} />
      <ProductList />
      <footer className="footer">
        <div className="container">
          <div id="contato">
            <strong>EBAC Sports</strong><br/>
            <span className="small">Exercício com Redux Toolkit + RTK Query</span>
          </div>
        </div>
      </footer>
      <CartDrawer open={open} onClose={()=>setOpen(false)} />
    </>
  )
}