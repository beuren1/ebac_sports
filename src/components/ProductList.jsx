import React, { useMemo, useState } from 'react'
import { useGetProductsQuery } from '../features/api/productsApi.js'
import ProductCard from './ProductCard.jsx'

export default function ProductList(){
  const { data: products = [], isLoading, isError } = useGetProductsQuery()
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('Todos')

  const categories = useMemo(() => ['Todos', ...Array.from(new Set(products.map(p=>p.category)))], [products])

  const filtered = useMemo(() => {
    return products.filter(p => {
      const okQ = p.title.toLowerCase().includes(q.toLowerCase())
      const okC = cat === 'Todos' || p.category === cat
      return okQ && okC
    })
  }, [products, q, cat])

  if (isLoading) return <p className="container">Carregando produtos…</p>
  if (isError) return <p className="container">Erro ao carregar produtos.</p>

  return (
    <section className="container" id="catalogo">
      <div className="hero">
        <span className="badge">Catálogo</span>
        <h1>Equipamentos esportivos com preço justo</h1>
        <p>Filtre por categoria e pesquise pelo nome do produto.</p>
      </div>

      <div className="toolbar" style={{margin:'16px 0 20px'}}>
        <div className="search">
          <input
            placeholder="Buscar por nome…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>
        <div className="pills">
          {categories.map(c => (
            <button
              key={c}
              className={'pill' + (c===cat?' active':'')}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filtered.map(p => <ProductCard key={p.id} p={p} />)}
      </div>
    </section>
  )
}