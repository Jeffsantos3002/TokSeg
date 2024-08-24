import banner from '../assets/banner/banner.png'
import cell from '../assets/cell.png'
import appStore from '../assets/icones/appstore.svg'
import playstore from '../assets/icones/playstore.svg'

export default function Aplicativo() {
  return (
    <section className="bg-verdeTokSeg w-full flex justify-center px-4 py-24">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center w-full max-w-[1256px] ">
        <div className='flex flex-col space-y-14 items-center lg:items-start mb-14'>
          <h1 className='text-4xl font-bold text-center text-gray-800'>Baixe o App e Acesse sua  Portaria Inteligente</h1>
          <img src={cell} alt="app" className='w-64 flex  lg:hidden' />
          <p className='w-full max-w-[500px] text-2xl '>
            Com nosso aplicativo parceiro, você tem acesso a serviços de
            segurança diretamente no seu smartphone. Controle tudo de forma simples e rápida, de onde estiver!
          </p>
          <div className='space-x-8 lg:w-full w-auto '>

            <a className="btn rounded bg-white border-none sm:px-8" href="https://apps.apple.com/br/app/acesso-seguro-app/id6466288946" target='_blank' >
              <img src={appStore} alt="appstore-download" className='w-8  ' />
              <p className='text-xl text-dark'>IOS</p>
            </a>
            <a className="btn bg-white text-dark  rounded border-none sm:px-8" href="https://play.google.com/store/apps/details?id=br.com.acessoseguroapp" target='_blank' >
              <img src={playstore} alt="playstore-download" className='w-8 ' />
              <p className='text-xl'>Android</p>
            </a>
          </div>
        </div>
        <img src={cell} alt="app" className='w-64 hidden lg:flex' />
      </div>
    </section>
  )

}