import Secruty from '../assets/icons/security.svg'

export default function Section3 () {
  return(
    <section className="bg-dark w-full text-white py-20 lg:py-24 px-4 flex justify-center">
      <div className="w-full max-w-[1256px] flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-8 max-w-[600px]">
          <h2 className="section-title">
            Tornando o seu mundo <br/>
            <span className="text-verdeTokSeg">mais seguro.</span>
          </h2>
          <p className="text-lg sm:text-2xl leading-relaxed text-white/90">
            Proporcione mais segurança para você e sua família com a solução Tokseg, que coloca o morador
            no centro de tudo e avança constantemente para atender suas necessidades.
          </p>
          <a href="#form" className="btn-cta w-full max-w-80">Falar com um especialista</a>
        </div>
        <div className="-order-1 lg:order-none flex items-center justify-center rounded-full bg-dark2 p-10 lg:p-16 border border-white/5">
          <img className="w-32 sm:w-40 lg:w-56" src={Secruty} alt="Segurança condominial" title="Segurança"/>
        </div>
      </div>
    </section>
  )
}
