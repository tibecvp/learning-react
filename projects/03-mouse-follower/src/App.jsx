import { useEffect, useState } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    console.log('Effect', { enabled })
  }, [enabled])

  return (
    <>
      <h3>Project 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Deactivate' : 'Activate'} Follow Mouse
      </button>
    </>
  )
}

export default App
