import { useState } from 'react'
import Banner from './sections/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
    </>
  )
}

export default App
