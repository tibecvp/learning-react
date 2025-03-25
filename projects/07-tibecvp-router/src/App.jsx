import { HomePage } from "./pages/Home.jsx"
import { AboutPage } from "./pages/About.jsx"
import { Router } from "./Router.jsx"
import Page404 from "./pages/404.jsx"

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/contact',
    Component: () => <h1>This is my Contact</h1>
  }
]

function App() {

  return (
    <>
      <Router routes={routes} defaultComponent={Page404} />
    </>
  )
}

export default App
