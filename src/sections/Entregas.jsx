import entrega from '../assets/banner/entrega.webp';

const Entregas = () => {
  return (
    <section className="py-20 lg:py-24 bg-verdeTokSeg">
      <div className="max-w-[1256px] mx-auto px-4">
        <h2 className="section-title text-center max-w-4xl mx-auto mb-14">
          Não é apenas uma encomenda com a Tokseg, é a segurança e a confiança que sua encomenda merece.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-last lg:order-first flex flex-col gap-8">
            <h3 className="text-2xl sm:text-4xl font-bold text-center lg:text-left">Descubra o novo jeito de receber suas entregas!</h3>

            <div className="rounded-2xl bg-white/10 border border-white/20 p-6">
              <h4 className="text-xl sm:text-2xl font-bold mb-3">Comodidade para os moradores</h4>
              <p className="text-base sm:text-lg leading-relaxed text-white/90">
                Contamos com um sistema de armários compartilhados.
                Assim que a encomenda é recebida, o morador recebe uma notificação no celular.
                Quando chegar em casa, sem pressa, o morador pode se dirigir à portaria e retirar sua encomenda.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/20 p-6">
              <h4 className="text-xl sm:text-2xl font-bold mb-3">Facilidade para entregadores</h4>
              <p className="text-base sm:text-lg leading-relaxed text-white/90">
                A Tokseg previne complicações como o não recebimento, dificuldade de acesso ao local da entrega e encomendas deixadas em locais impróprios.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <a href="#form" className="btn-cta-light w-full max-w-80">Orçamento sem compromisso</a>
            </div>
          </div>

          <div className="order-first lg:order-last flex items-center justify-center">
            <img src={entrega} alt="Entrega de encomenda em armário inteligente" loading="lazy"
              className="w-full max-w-xl h-auto rounded-3xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entregas;
