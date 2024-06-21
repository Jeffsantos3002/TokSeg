import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './sections/container';
 
function App() {
  const [count, setCount] = useState(0)

  return (
  <Container>
    <div className=''>
      <span className="text-2xl font-bold  text-white mb-4 ">Funcionalidades que se adaptam à rotina do morador</span>
      </div>
    </Container>
  )
}

export default App
