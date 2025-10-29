# EBAC Sports — Redux Toolkit + RTK Query

Projeto React (Vite) pronto para o exercício:

- Substitui `useState` por **Redux Toolkit** (`createSlice`)
- Carrinho com `addItem`, `removeItem`, `updateQty`, `clearCart`
- **RTK Query** buscando produtos de `/products.json`
- `useSelector` e `useDispatch` usados em vários componentes
- Visual diferente do original (tema claro, azul + verde)

## Como rodar

```bash
npm install
npm run dev
```

A API é um JSON estático em `public/products.json`.
Você pode alterar os produtos à vontade.

## Onde está o que importa?

- `src/store.js` — configura a store, inclui `productsApi.middleware`
- `src/features/cart/cartSlice.js` — slice do carrinho (Redux Toolkit)
- `src/features/api/productsApi.js` — RTK Query (`useGetProductsQuery`)
- `src/components/ProductList.jsx` — consome RTK Query + filtros
- `src/components/ProductCard.jsx` — usa `useDispatch` para adicionar ao carrinho
- `src/components/Header.jsx` — usa `useSelector` para contar itens
- `src/components/CartDrawer.jsx` — alterar quantidade, remover, limpar

## Dica

Se quiser trocar imagens sem assets locais, mantenha URLs (Unsplash) como no exemplo ou coloque arquivos em `public/` e aponte o caminho.