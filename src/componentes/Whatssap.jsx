import whatsappLogo from '../assets/icones/whatsapp.svg'

export default function Whatsapp(){
  return(
    <div className='fixed bottom-5 right-3'>
      <a href="https://api.whatsapp.com/message/GCVHBXESHCOGN1?autoload=1&app_absent=0" target='_blank'>
        <img src={whatsappLogo} alt="logo-whatsapp" className='w-16'/>
      </a>
    </div>
  )
}