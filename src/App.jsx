import { useState } from 'react'
import Banner from './sections/Banner'
import Form from './sections/Form'
import Section3 from './sections/Section3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-white'>
      <Banner/>
      <Form/>
      <Section3/>
    </div>
    </>
  )
}

export default App
