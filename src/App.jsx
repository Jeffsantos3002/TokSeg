import Banner from './sections/Banner'
import Form from './sections/Form'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './sections/container';
 
function App() {

  return (
    <>
    <div className='text-white'>
      <Banner/>
      <Form/>
    </div>

    </>
  <Container/>

  )
}

export default App
