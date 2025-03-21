import { useEffect, useState } from "react"
import { EVENTS } from "./consts"

function navigate(href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is an example page to create a react router from scratch.</p>
      <button onClick={() => navigate('/about')}>Go to About Us</button>
    </>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About Us</h1>
      <div>
        <img width='240px' src="https://media.licdn.com/dms/image/v2/D5603AQHEORdTR4pcuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724258334598?e=1747872000&v=beta&t=xqkZsLN5L7XV4w-zeyakXgXVVBvQakFJvfmwkPoGNyc" alt="Tibe´s picture" />
      </div>
      <p>This is an example page to create a react router from scratch.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </>
  )
}

export default App
