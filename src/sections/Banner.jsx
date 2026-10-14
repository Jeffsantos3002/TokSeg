import logo from '../assets/banner/logo.webp'
import banner from '../assets/banner/banner.webp'

export default function Banner (){
  return(
    <section className="w-full flex justify-center px-4 pt-28 pb-20 lg:pt-32 lg:pb-24 bg-white overflow-hidden">
      <div className="w-full max-w-[1256px] flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center lg:items-start lg:w-3/5">
          <img src={logo} alt="Logo TokSeg" title="TokSeg" className="w-56 sm:w-72 h-auto object-contain mb-8"/>
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            <h1 className="text-pretoTokSeg text-4xl sm:text-5xl xl:text-6xl text-center lg:text-start font-black leading-tight">
              A MELHOR SOLUÇÃO <br className="hidden sm:block" />
              PARA O SEU <span className="text-verdeTokSeg">CONDOMÍNIO.</span>
            </h1>
            <p className="text-pretoHover text-center lg:text-start text-lg sm:text-2xl max-w-xl">
              Simples, fácil e completo é a nossa portaria inteligente.
            </p>
            <a href="#form" className="hidden lg:inline-flex btn-cta w-full max-w-[356px]">Orçamento sem compromisso</a>
          </div>
        </div>
        <img src={banner} alt="Aplicativo Acesso Seguro e soluções TokSeg" title="Portaria inteligente"
          className="w-full max-w-[280px] sm:max-w-sm lg:max-w-md h-auto object-contain"/>
        <a href="#form" className="lg:hidden btn-cta w-full max-w-[356px]">Orçamento sem compromisso</a>
      </div>
    </section>
  )
}
