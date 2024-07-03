import { useState } from 'react'
import Banner from './sections/Banner'
import Form from './sections/Form'
import Footer from './sections/footer'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './sections/container';
 
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section6 from './sections/Section6'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='text-white'>
      <Banner/>
      <Container/>
      <Section3/>
      <Section4/>
      <Form/>
      <Footer/>
      <Section6/>
    </div>
    </>


  )
}

export default App
