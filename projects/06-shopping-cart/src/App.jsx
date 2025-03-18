import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header.jsx"
import { Products } from "./components/Products.jsx"
import { Footer } from './components/Footer.jsx'
import { useState } from 'react'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './components/Cart.jsx'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
