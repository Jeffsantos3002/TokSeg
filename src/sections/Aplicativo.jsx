import cell from '../assets/cell.webp'
import appStore from '../assets/icones/appstore.svg'
import playstore from '../assets/icones/playstore.svg'

export default function Aplicativo() {
  return (
    <section className="bg-verdeTokSeg w-full flex justify-center px-4 py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-[1256px] flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-8 items-center lg:items-start text-center lg:text-start">
          <h2 className="section-title max-w-xl">Baixe o App e acesse sua Portaria Inteligente</h2>
          <img src={cell} alt="Aplicativo Acesso Seguro" className="w-52 lg:hidden drop-shadow-2xl" />
          <p className="w-full max-w-[520px] text-lg sm:text-xl leading-relaxed text-white/90">
            Com nosso aplicativo parceiro, você tem acesso a serviços de
            segurança diretamente no seu smartphone. Controle tudo de forma simples e rápida, de onde estiver!
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a className="btn h-14 rounded-xl bg-white hover:bg-gray border-none px-6 text-dark gap-3 shadow-lg"
              href="https://apps.apple.com/br/app/acesso-seguro-app/id6466288946" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="" className="w-7" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-normal uppercase">Baixar na</span>
                <span className="text-lg">App Store</span>
              </span>
            </a>
            <a className="btn h-14 rounded-xl bg-white hover:bg-gray border-none px-6 text-dark gap-3 shadow-lg"
              href="https://play.google.com/store/apps/details?id=br.com.acessoseguroapp" target="_blank" rel="noopener noreferrer">
              <img src={playstore} alt="" className="w-7" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-[10px] font-normal uppercase">Disponível no</span>
                <span className="text-lg">Google Play</span>
              </span>
            </a>
          </div>
        </div>
        <img src={cell} alt="Aplicativo Acesso Seguro" className="w-64 hidden lg:block drop-shadow-2xl" />
      </div>
    </section>
  )
}
