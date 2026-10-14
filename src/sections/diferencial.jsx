import ico1 from '../assets/diferencial/ico1.svg';
import ico2 from '../assets/diferencial/ico2.png';
import ico3 from '../assets/diferencial/ico3.svg';
import ico4 from '../assets/diferencial/ico4.png';
import ico5 from '../assets/diferencial/ico5.svg';
import ico6 from '../assets/diferencial/ico6.svg';
import ico7 from '../assets/diferencial/ico7.svg';
import ico8 from '../assets/diferencial/ico8.svg';

const itens = [
  { icone: ico1, texto: 'Moldamos nossas soluções para atender às demandas do seu condomínio.' },
  { icone: ico2, texto: 'Temos soluções tecnológicas para cada demanda.' },
  { icone: ico3, texto: 'Contamos com fornecedores homologados.' },
  { icone: ico4, texto: 'Referência em portaria remota e segurança condominial.' },
  { icone: ico5, texto: 'Estamos em constante evolução para atender melhor novas necessidades.' },
  { icone: ico6, texto: 'Fornecemos treinamento personalizado para gestores, síndicos e porteiros.' },
  { icone: ico7, texto: 'Ao escolher a solução Tokseg, você garante economia significativa e otimização dos recursos do seu condomínio.' },
  { icone: ico8, texto: 'Oferecemos suporte físico e remoto para o seu condomínio.' },
];

const Diferencial = () => {
  return (
    <section className="bg-verdeTokSeg py-20 lg:py-24">
      <div className="max-w-[1256px] mx-auto px-4">
        <h2 className="section-title text-center max-w-4xl mx-auto mb-14">
          Portaria Tokseg é muito mais do que uma empresa de tecnologia para condomínios.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {itens.map((item, i) => (
            <div key={i}
              className="flex flex-col items-center text-center gap-4 rounded-2xl bg-white/10 border border-white/20 p-6 transition duration-300 hover:bg-white/15 hover:-translate-y-1">
              <img src={item.icone} alt="" aria-hidden="true" className="w-20 h-20 object-contain" />
              <p className="text-base leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-14">
          <a href="#form" className="btn-cta-light w-full max-w-80">Falar com especialista</a>
        </div>
      </div>
    </section>
  );
}

export default Diferencial;
