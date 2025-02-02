import whatsappLogo from '../assets/icones/whatsapp.svg'

export default function Whatsapp(){
  return(
    <div className='fixed bottom-5 right-3'>
      <a href= "https://wa.me/557932512318" target='_blank'>
        <img src={whatsappLogo} alt="logo-whatsapp" className='w-16'/>
      </a>
    </div>
  )
}