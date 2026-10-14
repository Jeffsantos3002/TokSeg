import icone1 from '../assets/icones-container/icone1.svg';
import icone2 from '../assets/icones-container/icone2.png';
import icone3 from '../assets/icones-container/icone3.svg';

const itens = [
  { icone: icone1, alt: 'Câmeras em tempo real', texto: 'Disponibiliza a visualização das câmeras em tempo real via app, defina os canais liberados por grupos de perfis.' },
  { icone: icone2, alt: 'Convite facial', texto: 'O convite facial via Whatsapp agiliza o acesso seguro sem contato, reforçando a segurança com reconhecimento facial.' },
  { icone: icone3, alt: 'Notificações push', texto: 'Receba notificações PUSH em tempo real em seu celular, da entrada e da saída de pessoas e veículos do condomínio.' },
];

const Container = () => {
  return (
    <section className="bg-dark">
      <div className="mx-auto max-w-[1256px] px-4 py-20 lg:py-24 grid gap-6 md:grid-cols-3">
        {itens.map((item) => (
          <div key={item.alt}
            className="flex flex-col items-center text-center rounded-2xl bg-dark2 border border-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-verdeTokSeg/60">
            <div className="flex justify-center items-center h-24 w-24 mb-6">
              <img src={item.icone} alt={item.alt} className="max-h-full max-w-full object-contain" />
            </div>
            <p className="text-white/90 text-lg leading-relaxed">{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Container;
