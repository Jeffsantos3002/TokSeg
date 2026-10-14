import app from '../assets/icons/app.svg';
import acesso from '../assets/icons/acesso.svg';
import entrega from '../assets/icons/entrega.svg';
import convite from '../assets/icons/convite.svg';
import icone2 from '../assets/icones-container/icone2.png';

const recursos = [
  { icone: app, alt: 'Aplicativo', texto: 'Aplicativo exclusivo para máxima segurança e eficiência' },
  { icone: icone2, alt: 'Reconhecimento facial', texto: 'Reconhecimento facial para moradores e visitantes' },
  { icone: acesso, alt: 'Gestão de acessos', texto: 'Gestão e controle de acessos integrado com o CFTV' },
  { icone: entrega, alt: 'Entregas', texto: 'Soluções para receber entregas com facilidade e segurança' },
  { icone: convite, alt: 'Convites', texto: 'Diversas formas de convite para os convidados acessarem o condomínio' },
];

const extras = [
  'Notificações de acesso à unidade em tempo real',
  'Tags veiculares',
  'Monitoramento patrimonial',
  'Agendamento de prestadores de serviço',
];

export default function Section4() {
  return (
    <section className="w-full flex justify-center bg-verdeTokSeg py-20 lg:py-24 px-4">
      <div className="w-full max-w-[1256px] grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col items-center lg:items-start gap-8">
          <h2 className="section-title text-center lg:text-start max-w-[578px]">
            Tokseg é sinônimo de credibilidade e eficiência através das nossas soluções.
          </h2>
          <div className="w-full max-w-[600px] aspect-video rounded-2xl overflow-hidden shadow-2xl bg-dark">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/KMdFjTHZHt0?si=NoHkJF-QonuwyRjR"
              title="Vídeo institucional TokSeg" loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
          </div>
          <a href="#form" className="hidden lg:inline-flex btn-cta-light w-full max-w-[356px]">Orçamento sem compromisso</a>
        </div>

        <div className="flex flex-col gap-3 w-full max-w-[560px] mx-auto">
          {recursos.map((r) => (
            <div key={r.alt}
              className="flex items-center gap-4 rounded-2xl border-2 border-white/70 bg-white/5 px-5 py-3 transition hover:bg-white/15">
              <img src={r.icone} alt={r.alt} title={r.alt} className="w-8 h-8 object-contain shrink-0" />
              <p className="text-base sm:text-lg font-semibold">{r.texto}</p>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3">
            {extras.map((t) => (
              <div key={t}
                className="flex items-center justify-center text-center rounded-2xl border-2 border-white/70 bg-white/5 px-4 py-6 transition hover:bg-white/15">
                <p className="text-sm sm:text-lg font-semibold">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <a href="#form" className="lg:hidden btn-cta-light w-full max-w-[356px] mx-auto">Orçamento sem compromisso</a>
      </div>
    </section>
  )
}
