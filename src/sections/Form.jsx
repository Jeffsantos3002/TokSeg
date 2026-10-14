import { useState, useRef } from "react";
import EmailJs from '@emailjs/browser'

import aviao from '../assets/icons/email-send.svg'
export default function Form() {
  // validações do form
  const [verificaEmail, setVerificaEmail] = useState(null);
  const [verificaNome, setVerificaNome] = useState(null);
  const [verificaTel, setVerificaTel] = useState(null);
  const [verificaCidade, setVerificaCidade] = useState(null);
  const [verificaProblema, setVerificaProblema] = useState(null);
  

  const email = useRef(null)
  const nome = useRef(null)
  const telefone = useRef(null)
  const form = useRef(null)
  const cidade = useRef(null)
  const endereco = useRef(null)
  const funcao = useRef(null)
  const problema = useRef(null)
  const aceito = useRef(null)
  const portaria_fisica = useRef(null)
  const portaria_remota = useRef(null)
  const portaria_hibrida = useRef(null)
  
  const checkEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.current.value === '') {
      setVerificaEmail('Campo obrigatório');
      return false

    } else if (emailRegex.test(email.current.value)) {
      setVerificaEmail(null);
      return true

    } else {
      setVerificaEmail('Email inválido');
      return false
    }
  };

  const checkNome = () => {
   if(!nome.current.value){
    setVerificaNome('Campo obrigatório')
    return false
   } else{
    setVerificaNome(null)
    return true
  }
  }
  const checkTel = () => {
    const phoneRegex = /^(?:\+\d{2}\s)?(?:\(\d{2}\)\s|\d{2}\s)?\d{5}-?\d{4}$|^\(\d{2}\)\s?\d{8,9}$/;

    if (telefone.current.value === '') {
      setVerificaTel('Campo obrigatório');
      return false;
    } else if (phoneRegex.test(telefone.current.value)) {
      setVerificaTel(null);
      return true;
    } else {
      setVerificaTel('Número inválido: xx xxxxxxxxx');
      return false;
    }
  };

  const checkCidade = () => {
    if(cidade.current.value){
      setVerificaCidade(null)
      return true
    } else{
     setVerificaCidade('Campo obrigatório')
     return false
    }
  }
  const checkProblema = () => {
    if(problema.current.value !== "Selecione") {
      setVerificaProblema(null)
      return true
    } else {
      setVerificaProblema('Campo obrigatório')
      return false
    }
  }
  // Verifica todos os itens obrigatórios e após isso, passa os valores do form com paramentros do email
  const handleSubmit = (event) => {
    event.preventDefault();
    checkEmail()
    checkNome()
    checkTel()
    checkCidade() 
    checkProblema()
    const checando = () =>{
      if(checkEmail() && checkNome() && checkTel() && checkCidade() && checkProblema()){
        return true
      } else{
        return false
      }
    }

    
    // Parametros que serão enviados no email 
    const templateParams = {
      from_name: nome.current.value,
      message: problema.current.value,
      email: email.current.value,
      city: cidade.current.value,
      phone: telefone.current.value,
      address: endereco.current.value,
      role: funcao.current.value,
      issue: problema.current.value,
      accepted: aceito.current.checked ? 'Sim' : 'Não',
      portaria_fisica: portaria_fisica.current.checked ? 'Sim' : 'Não',
      portaria_remota: portaria_remota.current.checked ? 'Sim' : 'Não',
      portaria_hibrida: portaria_hibrida.current.checked ? 'Sim' : 'Não'
    };
    if (checando() ) {
 
      EmailJs.send('service_lpm9evo', 'template_ogkqiil', templateParams, 'H3wt4aqgVdX0ehnCi')
      .then((response) => {
        console.log('email enviado', response.status, response.text);
      })
      .catch((err) => {
        console.log('Erro: ', err);
      })
      .finally(() => {
        form.current.reset()
        document.getElementById('my_modal_2').showModal()
      })      
    }

    
  };
  const inputClass = "input input-bordered w-full bg-white text-pretoTokSeg focus:border-verdeTokSeg focus:outline-none focus:ring-2 focus:ring-verdeTokSeg/40"
  const labelClass = "text-sm font-semibold text-white/80 mb-1"
  const erroClass = "text-erro text-sm mt-1"
  const toggleClass = "toggle toggle-success toggle-lg"

  return (
    <section className="w-full bg-dark flex justify-center items-center py-20 lg:py-24" id="form">
      <form className="flex flex-col lg:flex-row items-center lg:items-start gap-12 w-full max-w-[1256px] px-4"
        ref={form} noValidate
      >
        <div className="flex flex-col gap-8 lg:items-start items-center lg:w-1/2 lg:sticky lg:top-28">
          <h2 className="section-title text-center lg:text-start text-verdeFosco">Personalize a tecnologia a ser implantada no seu condomínio!</h2>
          <p className="text-lg sm:text-2xl lg:text-start text-center text-white/90 leading-relaxed">Portaria TokSeg é o que seu empreendimento precisa: nem mais, nem menos do que o necessário.</p>
          <div className="w-full max-w-md divide-y divide-white/10 rounded-2xl bg-dark2 border border-white/5 px-6">
            <label htmlFor="portaria_fisica" className="flex justify-between items-center py-4 cursor-pointer">
              <span className="text-xl sm:text-2xl font-bold">Portaria Física</span>
              <input id="portaria_fisica" type="checkbox" className={toggleClass} defaultChecked ref={portaria_fisica}/>
            </label>
            <label htmlFor="portaria_remota" className="flex justify-between items-center py-4 cursor-pointer">
              <span className="text-xl sm:text-2xl font-bold">Portaria Remota</span>
              <input id="portaria_remota" type="checkbox" className={toggleClass} ref={portaria_remota} />
            </label>
            <label htmlFor="portaria_hibrida" className="flex justify-between items-center py-4 cursor-pointer">
              <span className="text-xl sm:text-2xl font-bold">Portaria Híbrida</span>
              <input id="portaria_hibrida" type="checkbox" className={toggleClass} ref={portaria_hibrida} />
            </label>
          </div>
          <p className="text-base sm:text-xl lg:text-start text-center text-white/80 leading-relaxed">Nosso aplicativo exclusivo &apos;AcessoSeguro&apos; oferece funcionalidades que se adaptam à rotina de cada morador, permitindo personalização prática e rápida.</p>
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-5 rounded-2xl bg-dark2 border border-white/5 shadow-2xl p-6 sm:p-10">
          <h3 className="text-2xl font-bold">Solicite seu orçamento</h3>
          <div className="flex flex-col">
            <label htmlFor="nome" className={labelClass}>Nome *</label>
            <input className={inputClass} type="text" id="nome" name="nome" placeholder="Seu nome completo" ref={nome} />
            {verificaNome && <p className={erroClass}>{verificaNome}</p>}
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="email" className={labelClass}>Email *</label>
              <input className={inputClass} type="email" id="email" name="email" placeholder="seuemail@gmail.com" ref={email} />
              {verificaEmail && <p className={erroClass}>{verificaEmail}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="telefone" className={labelClass}>Telefone para contato *</label>
              <input className={inputClass} type="tel" id="telefone" name="telefone" placeholder="(DDD) 000000000" ref={telefone} />
              {verificaTel && <p className={erroClass}>{verificaTel}</p>}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label htmlFor="cidade" className={labelClass}>Cidade *</label>
              <input className={inputClass} type="text" id="cidade" name="cidade" ref={cidade} />
              {verificaCidade && <p className={erroClass}>{verificaCidade}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="endereco" className={labelClass}>Endereço</label>
              <input className={inputClass} type="text" id="endereco" name="endereco" ref={endereco}/>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="funcao" className={labelClass}>No condomínio você é:</label>
            <select className="select select-bordered w-full bg-white text-pretoTokSeg focus:border-verdeTokSeg focus:outline-none" id="funcao" name="funcao" ref={funcao}>
              <option value="Selecione">Selecione</option>
              <option value="Administrador de condomínio">Administrador de condomínio</option>
              <option value="Advogado condominial">Advogado condominial</option>
              <option value="Conselheiro">Conselheiro</option>
              <option value="Morador">Morador</option>
              <option value="Síndico(a) morador">Síndico(a) morador</option>
              <option value="Síndico(a) profissional">Síndico(a) profissional</option>
              <option value="Subsíndico">Subsíndico</option>
              <option value="Zelador(a)">Zelador(a)</option>
              <option value="Construtora">Construtora</option>
              <option value="Corretor Imobiliário">Corretor Imobiliário</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="problema" className={labelClass}>Qual problema você quer resolver? *</label>
            <select className="select select-bordered w-full bg-white text-pretoTokSeg focus:border-verdeTokSeg focus:outline-none" id="problema" name="problema" ref={problema} required>
              <option value="Selecione">Selecione</option>
              <option value="quero-reduzir-custos">Quero reduzir custos</option>
              <option value="quero-mais-tecnologia">Quero mais tecnologia</option>
              <option value="Quero-saber-mais-sobre-a-TokSeg">Quero saber mais sobre a TokSeg</option>
            </select>
            {verificaProblema && <p className={erroClass}>{verificaProblema}</p>}
          </div>
          <label htmlFor="termos" className="flex items-start gap-3 cursor-pointer text-sm text-white/70 leading-relaxed">
            <input className="checkbox checkbox-success checkbox-sm mt-0.5 border-white/40" type="checkbox" name="termos" id="termos" ref={aceito} />
            <span>
              Concordo em receber comunicações de marketing como newsletters e novidades TokSeg Group.
              Ao clicar no botão abaixo você concorda com a{' '}
              <span className="underline text-verdeFosco" onClick={(e) => { e.preventDefault(); document.getElementById('my_modal_3').showModal() }}>Política de Privacidade</span>*.
            </span>
          </label>
          <button type="submit" className="btn-cta w-full" onClick={handleSubmit}>
            Solicitar Contato
          </button>
        </div>
      </form>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-white text-verdeTokSeg  flex flex-col justify-center items-center space-y-8">
            <h3 className="font-bold text-3xl sm:text-4xl text-center">Email enviado com sucesso!</h3>
            <img src={aviao} alt="email-enviado" title="email-enviado" className="w-24"/>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
    </section>
  )
}
