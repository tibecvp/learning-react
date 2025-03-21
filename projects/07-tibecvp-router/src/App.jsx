import { useState } from "react"

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is an example page to create a react router from scratch.</p>
      <a href="/about">Go to About Us</a>
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
      <a href="/">Go to Home</a>
    </>
  )
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  return (
    <>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </>
  )
}

export default App
