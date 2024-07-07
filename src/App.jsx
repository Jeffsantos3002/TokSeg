import Banner from './sections/Banner'
import Form from './sections/Form'
import Footer from './sections/footer'
import Entregas from './sections/Entregas'
import Container from './sections/container';
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section6 from './sections/Section6'
import Diferencial from './sections/diferencial';

function App() {
  return (
    <>
    <div className='text-white'>
      <Banner/>
      <Container/>
      <Section3/>
      <Section4/>
      <Form/>
      <Diferencial/>
      <Section6/>
      <Entregas/>
      <Footer/>
    </div>
    </>


  )
}

export default App
