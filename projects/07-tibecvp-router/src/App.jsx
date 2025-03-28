import { HomePage } from "./pages/Home.jsx"
import { AboutPage } from "./pages/About.jsx"
import { Router } from "./Router.jsx"
import { Route } from "./pages/Route.jsx"
import Page404 from "./pages/404.jsx"
import SearchPage from "./pages/SearchPage.jsx"

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App() {

  return (
    <>
      <Router routes={routes} defaultComponent={Page404} >
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </>
  )
}

export default App
