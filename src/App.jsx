import Banner from './sections/Banner'
import Form from './sections/Form'
import Footer from './sections/footer'
import Entregas from './sections/Entregas'
import Container from './sections/container'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section6 from './sections/Section6'
import Diferencial from './sections/diferencial'
import  Cookie from './sections/Cookie'
import Header from './componentes/Header'
import Whatsapp from './componentes/Whatssap'
import Aplicativo from './sections/Aplicativo'

function App() {
  return (
    <>
    <div className='text-white'>
      <Header/>
      <Banner/>
      <Container/>
      <Aplicativo/>
      <Section3/>
      <Section4/>
      <Form/>
      <Diferencial/>
      <Section6/>
      <Entregas/>
      <Footer/>
      <Cookie/>
      <Whatsapp/>
    </div>
    </>


  )
}

export default App
