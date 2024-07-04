import hero from '../assets/section7.png'

export default function Section7() {
  return (
    <section className='w-full bg-white text-verdeTokSeg flex justify-center py-24'>
      <div className=' w-full max-w-[1256px] px-4 space-y-8'>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:space-x-6'>
          <img src={hero} alt="imagem-section7" className='w-80' />
          <div className='text-4xl font-medium lg:text-start text-center'>A maior base de atendimento <br /> de <span className='font-bold'>Portaria Remota da América Latina</span></div>
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className='flex justify-center items-center max-w-[500px] min-h-[230px] py-2 border-4 rounded-3xl px-2 mr-4 mt-8 text-2xl'>
            <p>Treinamento interno com os procedimentos necessários para fornecer excelência no atendimento e proteção aos moradores, além de auditoria frequente para manter alta qualidade.</p>
          </div>
          <div className='flex justify-center items-center max-w-[500px] min-h-[230px] py-2 border-4 rounded-3xl px-2 mr-4 mt-8 text-2xl'>
            <p>Sistema de operação detalhado, com planta do condomínio para melhor orientação e acompanhamento.</p>
          </div>
          <div className='flex justify-center items-center max-w-[500px] min-h-[230px] py-2 border-4 rounded-3xl px-2 mr-4 mt-8 text-2xl'>
            <p>100% conectados: Gerador de energia para garantir funcionamento mesmo em queda de luz.</p>
          </div>
          <div className='flex justify-center items-center max-w-[500px] min-h-[230px] py-2 border-4 rounded-3xl px-2 mr-4 mt-8 text-2xl'>
            <p>Treinamento interno com os procedimentos necessários para fornecer excelência no atendimento e proteção aos moradores, além de auditoria frequente para manter alta qualidade.</p>
          </div>
          <div className='flex justify-center items-center max-w-[500px] min-h-[230px] py-2 border-4 rounded-3xl px-2 mr-4 mt-8 text-2xl'>
            <p>Notificações e lembretes de regras e necessidades especiais de cada condomínio para um atendimento personalizado.</p>
          </div>
        </div>

      </div>
    </section>
  )
}