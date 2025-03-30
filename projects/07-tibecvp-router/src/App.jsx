import { Component, lazy, Suspense } from 'react'

import Page404 from "./pages/404.jsx"
import SearchPage from "./pages/SearchPage.jsx"

import { Router } from "./Router.jsx"
import { Route } from "./Route.jsx"

const HomePage = lazy(() => import('./pages/Home.jsx'))
const LazyAboutPage = lazy(() => import('./pages/About.jsx'))

const routes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={routes} defaultComponent={Page404} >
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
