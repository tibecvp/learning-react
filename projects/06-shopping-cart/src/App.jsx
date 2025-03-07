import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header.jsx"
import { Products } from "./components/Products.jsx"
import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
