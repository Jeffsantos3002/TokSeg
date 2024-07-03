import monitoramento from '../assets/section6/monitoramento.png'
import aplicativo from '../assets/section6/aplicativo.png'
import videoChamada from '../assets/section6/videoChamada.png'

export default function Section6 () {
  return(
    <div className="w-full bg-pretoTokSeg  py-12 flex justify-center px-5">
      <div className="w-full max-w-[1256px] flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-16 lg:space-y-0 lg:space-x-8">
        <div className='flex flex-col items-center text-center lg:text-start space-y-8 max-w-[322px] w-full'>
          <h1 className='text-4xl	font-semibold max-w-60 w-full text-center mt-8 lg:mt-0 '>Monitoring</h1>
          <img className='w-60 -order-1 lg:-order-none' src={monitoramento} alt="monitaramento" title='monitoramento' />
          <h2 className='text-2xl	font-semibold'>Mais que um sistema de atendimento, é atenção a cada detalhe 24 horas por dia.</h2>
          <p>Orientações de atendimento que mudam de acordo com as regras de cada condomínio. </p>
        </div>
        <div className='flex flex-col items-center text-center lg:text-start space-y-8 max-w-[322px] w-full'>
          <h1 className='text-4xl	font-semibold mt-8 lg:mt-0'>Aplicativo Porter</h1>
          <img className='w-60' src={aplicativo} alt="monitaramento" title='aplicativo' />
          <h2 className='text-2xl	font-semibold'>Poder e controle nas pontas dos dedos.</h2>
          <p>Possibilidades abrangentes de personalização. Cada morador no controle da sua própria experiência.</p>
        </div>
        <div className='flex flex-col items-center text-center lg:text-start space-y-8 max-w-[322px] w-full'>
          <h1 className='text-4xl	font-semibold mt-8 lg:mt-0'>Videochamada</h1>
          <img className='w-60' src={videoChamada} alt="monitaramento" title='videoChamada' />
          <h2 className='text-2xl	font-semibold'>Portaria Porter é autonomia do seu jeito.</h2>
          <p>Poder de escolha entre atender chamadas da Portaria em vídeo pelo celular ou delegar à Base de Atendimento.</p>
        </div>
      </div>
    </div>
  )
}