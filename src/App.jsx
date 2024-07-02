import { useState } from 'react'
import Banner from './sections/Banner'
import Form from './sections/Form'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-white'>
      <Banner/>
      <Section3/>
      <Section4/>
      <Form/>
    </div>
    </>
  )
}

export default App
