import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header.jsx"
import { Products } from "./components/Products.jsx"
import { Footer } from './components/Footer.jsx'
import { useState } from 'react'
import { IS_DEVELOPMENT } from './config.js'

function useFilters() {

  const [filters, setFilters] = useState({
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

  return { filters, filterProducts, setFilters }
}

function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters}></Footer>}
    </>
  )
}

export default App
