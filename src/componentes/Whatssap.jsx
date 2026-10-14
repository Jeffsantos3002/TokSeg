import whatsappLogo from '../assets/icones/whatsapp.svg'

export default function Whatsapp(){
  return(
    <a href="https://wa.me/557932512318" target="_blank" rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-4 z-40 rounded-full drop-shadow-xl transition-transform duration-200 hover:scale-110">
      <span className="absolute inset-0 rounded-full bg-success opacity-40 animate-ping" aria-hidden="true"></span>
      <img src={whatsappLogo} alt="WhatsApp" className="relative w-14 sm:w-16"/>
    </a>
  )
}
