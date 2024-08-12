import icone from '../assets/icons/icone.png'
import ideia from '../assets/icons/ideia.svg'
import chave from '../assets/icons/chave.svg'
import gestao from '../assets/icons/gestao.svg'
import app from '../assets/icons/app.svg';
import acesso from '../assets/icons/acesso.svg';
import entrega from '../assets/icons/entrega.svg';
import convite from '../assets/icons/convite.svg';
import icone2 from '../assets/icones-container/icone2.png';



export default function Section4() {
  return (
    <div className="w-full flex justify-center items-center bg-verdeTokSeg py-12 sm:px-4 px-2">
      <div className="w-full max-w-[1256px] flex lg:flex-row flex-col justify-between items-center">
        <h1 className="text-4xl text-white flex lg:hidden lg:text-start text-center font-bold max-w-[578px] w-full">Tokseg é sinônimo de credibilidade e eficiência através das nossas soluções.</h1>
        <div className="lg:w-1/2 lg:p-0 p-4 w-full space-y-8 flex flex-col  items-center lg:items-start">
          <h1 className="hidden lg:flex text-4xl text-white lg:text-start text-center font-bold max-w-[578px] w-full">Tokseg é sinônimo de credibilidade e eficiência através das nossas soluções.</h1>

          {/* Quando a tela ficar menor esse container é exibido  */}
          <div className="lg:hidden flex flex-col  max-w-[519px] w-full text-2xl text-center space-y-5">
            <div className='flex flex-row space-x-4 border-4 rounded-2xl items-center py-2.5 px-5'>
              <img src={app} alt="app" title='app' className='w-6' />
              <p className='text-start text-base sm:text-2xl'>Aplicativo exclusivo para máxima segurança e eficiência</p>
            </div>
            <div className='flex flex-row space-x-4 border-4 rounded-2xl items-center py-2.5 px-5'>
              <img src={icone2} alt="facial" title='reconhecimento facial' className='w-5' />
              <p className='text-start text-base sm:text-2xl'>Reconhecimento facial para moradores e visitantes</p>
            </div>
            <div className='flex flex-row space-x-4 border-4 rounded-2xl items-center py-2.5 px-5'>
              <img src={acesso} alt="gestao" title='gestão de acessos' className='w-9' />
              <p className='text-start text-base sm:text-2xl'>Gestão e controle de acessos integrado com o CFTV</p>
            </div>
            <div className='flex flex-row space-x-4 border-4 rounded-2xl items-center py-2.5 px-4'>
              <img src={entrega} alt="solucao" title='solução'  className='w-10' />
              <p className='text-start text-base sm:text-2xl'>Solução para entregas</p>
            </div>
            <div className='flex flex-row space-x-4 rounded-2xl items-center py-2.5 px-10'>
              <img src={convite} alt="chaves-virtuais" title='Envio de chaves virtuais'  className='w-6' />
              <p className='text-start text-base sm:text-2xl'>Envio de chaves virtuais</p>
            </div>
            <div className="flex space-x-4">
              <div className='space-x-4 border-4 rounded-2xl flex justify-center items-center py-8 px-5 w-1/2'>
                <p className='text-base sm:text-2xl'>Integração CardPlay e Android Auto</p>
              </div>
              <div className='space-x-4 border-4 rounded-2xl flex justify-center items-center py-8 px-5 w-1/2'>
              <p className='text-base sm:text-2xl'>Integração CardPlay e Android Auto</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className='space-x-4 border-4 rounded-2xl flex justify-center items-center py-8 px-5 w-1/2'>
                <p className='text-base sm:text-2xl'>Monitoramento Patrimonial</p>
              </div>
              <div className='space-x-4 border-4 rounded-2xl flex justify-center items-center py-8 px-5 w-1/2'>
                <p className='text-base sm:text-2xl'>Integração CardPlay e Android Auto</p>
              </div>
            </div>
          </div>
          <iframe className=" max-w-[600px] w-full max-h-[315px]" height="315" src="https://www.youtube.com/embed/KMdFjTHZHt0?si=NoHkJF-QonuwyRjR" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>

          <a href="#form" className='w-full max-w-[600px] flex items-center justify-center '>
            <button className='text-base btn btn-success rounded-full border-none text-white  w-full max-w-[356px]'>
              Orçamento sem compromisso
            </button>
          </a>
        </div>

        {/* Quando a tela ficar maior esse container é exibido  */}
        <div className="lg:flex hidden flex-col max-w-[519px] w-full text-2xl text-center space-y-5 ml-2">
          <div className='flex flex-row space-x-4 border-4  rounded-2xl items-center py-2.5 px-5'>
            <img src={app} alt="app" title='app' className='w-8' />
            <p className='text-start text-base sm:text-2xl'>Aplicativo exclusivo para máxima segurança e eficiência</p>
          </div>
          <div className='flex flex-row space-x-4 border-4 rounded-2xl items-center py-2.5 px-5'>
            <img src={icone2} alt="facial" title='reconhecimento facial' className='w-8' />
            <p className='text-start text-base sm:text-2xl'>Reconhecimento facial para moradores e visitantes</p>
          </div>
          <div className='flex flex-row space-x-4 border-4  rounded-2xl items-center py-2.5 px-5'>
            <img src={acesso} alt="gestao" title='gestão de acessos' className='w-9' />
            <p className='text-start text-base sm:text-2xl'>Gestão e controle de acessos integrado com o CFTV</p>
          </div>
          <div className='flex flex-row space-x-4 border-4  rounded-2xl items-center py-2.5 px-4'>
            <img src={entrega} alt="solucao" title='solução'  className='w-10' />
            <p className='text-start text-base sm:text-2xl'>Soluções para receber entrega com facilidade e segurança.</p>
          </div>
          <div className='flex flex-row space-x-4 border-4  rounded-2xl items-center py-2.5 px-5'>
            <img src={convite} alt="chaves-virtuais" title='Envio de chaves virtuais'  className='w-9' />
            <p className='text-start text-base sm:text-2xl'>Diversas formas de convite para os convidados aceserem o condomínio</p>
          </div>
          <div className="flex space-x-4">
            <div className='space-x-4 border-4  rounded-2xl flex justify-center items-center py-8 px-5 w-1/2'>
              <p className='text-base sm:text-2xl'>Notificações de acesso a unidade em tempo real</p>
            </div>
            <div className='space-x-4 border-4  rounded-2xl flex justify-center items-center py-8 px-5 w-1/2'>
            <p className='text-base sm:text-2xl'>Tags veiculares</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className='space-x-4 border-4 rounded-2xl flex justify-center items-center py-8 px-5 w-1/2'>
              <p className='text-base sm:text-2xl'>Monitoramento Patrimonial</p>
            </div>
            <div className='space-x-4 border-4 rounded-2xl flex justify-center items-center py-8 px-5 w-1/2'>
              <p className='text-base sm:text-2xl'>Agendamento de Prestadores de Serviço</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}