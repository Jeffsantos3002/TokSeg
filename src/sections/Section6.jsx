import aplicativo from '../assets/section6/aplicativo.jpg'
import automacao from '../assets/section6/automacao.jpeg'
import monitoramento from '../assets/section6/monitoramento.webp'

const cards = [
  {
    titulo: 'Monitoramento 24 horas',
    imagem: monitoramento,
    alt: 'Central de monitoramento',
    subtitulo: 'Monitoramento do condomínio em tempo real.',
    texto: 'Regras do sistema compatíveis com o perfil de cada condomínio.',
  },
  {
    titulo: 'Automação de ambientes',
    imagem: automacao,
    alt: 'Automação residencial',
    subtitulo: 'Poder e controle na palma da mão.',
    texto: 'Temos soluções de automação para deixar seu dia a dia mais prático e eficiente, desde o controle de acesso e iluminação inteligente até a climatização e segurança residencial.',
  },
  {
    titulo: 'Convite Facial Temporário',
    imagem: aplicativo,
    alt: 'Convite facial pelo celular',
    subtitulo: 'Liberdade para convidar via facial.',
    texto: 'Envie um convite facial via WhatsApp para o seu convidado acessar sua unidade autenticando-se no leitor.',
  },
]

export default function Section6 () {
  return(
    <section className="w-full bg-dark py-20 lg:py-24 flex justify-center px-4">
      <div className="w-full max-w-[1256px] grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <article key={c.titulo}
            className="flex flex-col items-center text-center gap-5 rounded-2xl bg-dark2 border border-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-verdeTokSeg/60">
            <img className="w-40 h-40 rounded-full object-cover ring-4 ring-verdeTokSeg/70" src={c.imagem} alt={c.alt} title={c.titulo} loading="lazy" />
            <h3 className="text-2xl lg:text-3xl font-bold">{c.titulo}</h3>
            <p className="text-lg font-semibold text-verdeFosco">{c.subtitulo}</p>
            <p className="text-white/80 leading-relaxed">{c.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
