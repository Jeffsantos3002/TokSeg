import aplicativo from '../assets/section6/aplicativo.jpg'
import automação from '../assets/section6/automação.jpg'
import monitoramento from '../assets/section6/monitoramento.png'


export default function Section6 () {
  return(
    <div className="w-full bg-dark  py-12 flex justify-center px-5">
      <div className="w-full max-w-[1256px] flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-16 lg:space-y-0 lg:space-x-8">
        <div className='flex flex-col items-center text-center lg:text-start space-y-8 max-w-[322px] w-full'>
          <h1 className='text-4xl	font-semibold max-w-60 w-full text-center mt-8 lg:mt-0 '>Monitramento 24 horas</h1>
          <img className='w-44 h-44 -order-1 lg:-order-none rounded-full' src={monitoramento} alt="monitaramento" title='monitoramento' />
          <h2 className='text-2xl	font-semibold'>Monitoramento do condominio em tempo real.</h2>
          <p>Regras do sistema compativel com o perfil de cada condomínio. </p>
        </div>
        <div className='flex flex-col items-center text-center lg:text-start space-y-8 max-w-[322px] w-full'>
          <h1 className='text-4xl	font-semibold mt-8 lg:mt-0 text-center'>Automação de ambientes</h1>
          <img className='w-44 h-44 rounded-full' src={automação} alt="monitaramento" title='aplicativo' />
          <h2 className='text-2xl	font-semibold'>Poder e controle na palma da mão.</h2>
          <p>Temos soluções de automação para deixar seu dia a dia mais prático e eficiente, desde o controle de acesso e iluminação inteligente até a climatização e segurança residencial.</p>
        </div>
        <div className='flex flex-col items-center text-center lg:text-start space-y-8 max-w-[322px] w-full'>
          <h1 className='text-4xl	font-semibold mt-8 lg:mt-0 text-center'>Convite Facial Temporario</h1>
          <img className='w-44 h-44  rounded-full' src={aplicativo} alt="monitaramento" title='videoChamada' />
          <h2 className='text-2xl	font-semibold text-center'>Liberdade para convidar via facial.</h2>
          <p>Envie um convite facial via whatsapp para o seu convidado para o mesmo acessar sua unidade autenticando-se no leitor.</p>
        </div>
      </div>
    </div>
  )
}