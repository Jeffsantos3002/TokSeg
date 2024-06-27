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
  const pergunta1 = useRef(null)
  const pergunta2 = useRef(null)
  const pergunta3 = useRef(null)
  
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
      setVerificaTel('Número inválido');
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
    console.log(problema.current.value)
    if(problema.current.value !== "Selecione") {
      setVerificaProblema(null)
      return true
    } else {
      setVerificaProblema('Campo obrigatório')
      return false
    }
  }
  const teste = () =>{
    modal.showmodal()
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
      pergunta1: pergunta1.current.checked ? 'Sim' : 'Não',
      pergunta2: pergunta2.current.checked ? 'Sim' : 'Não',
      pergunta3: pergunta3.current.checked ? 'Sim' : 'Não'
    };
    console.log(checkEmail(), checkNome(), checkTel(), checkCidade(), checkProblema())
    if (checando() ) {
 
      EmailJs.send('service_f04ec6h', 'template_7p0uq5e', templateParams, 'DdAcSucYxeBHBNXBQ')
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
  return (

    <div className="w-full bg-pretoTokSeg flex justify-center items-center py-12" id="form">
      <form className="flex flex-col items-center lg:flex-row w-full max-w-[1256px] px-10"
        ref={form}
      >
        <div className="space-y-12 flex flex-col lg:items-start items-center lg:w-1/2">
          <h1 className="text-5xl text-center font-bold text-verdeFosco">Monte do seu jeito</h1>
          <p className="text-3xl lg:text-start text-center">Portaria TokSeg é o que seu empreendimento precisa: nem mais, nem menos do que o necessário.</p>
          <div className="w-4/5 space-y-2  divide-y">
            <div className="flex flex-row justify-center items-center py-2 ">
              <label htmlFor="lorem" className="w-10/12 pr-2 text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
              <input type="checkbox" className="toggle toggle-lg  checked:[--tglbg:#00a96e]  bg-verdeFosco hover:bg-verdeFosco" defaultChecked ref={pergunta1}/>
            </div>
            <div className="flex flex-row justify-center items-center py-2 ">
              <label htmlFor="lorem2" className="w-10/12 pr-2 text-3xl font-bold ">Perferendis distinctio vitae eaque alias,</label>
              <input type="checkbox" className="toggle toggle-lg  checked:[--tglbg:#00a96e]  bg-verdeFosco hover:bg-verdeFosco" ref={pergunta2} />
            </div>
            <div className="flex flex-row justify-center items-center py-2">
              <label htmlFor="lorem3" className="w-10/12 pr-2 text-3xl font-bold"> eum autem eos necessitatibus dolor</label>
              <input type="checkbox" className="toggle toggle-lg  checked:[--tglbg:#00a96e]  bg-verdeFosco hover:bg-verdeFosco" ref={pergunta3} />

            </div>
          </div>
          <p className="text-3xl lg:text-start text-center">Funcionalidades que se adaptam à rotina de cada morador, com personalização prática e rápida pelo app.</p>
        </div>
        <div
          className="flex flex-col justify-center bg-lilas rounded-md pr-5 lg:pl-12 pl-5  py-2.5 z-10 lg:w-1/2 space-y-8"
        // action="https://api.staticforms.xyz/submit" method="POST"
        >
          <div className="flex flex-col">
            <label htmlFor="nome" >Nome * </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="text" id="nome" name="nome" ref={nome} />
            {verificaNome &&
              <p className="text-verdeTokSeg">{verificaNome}</p>
            }
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email * </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="email" id="email" name="email" placeholder="gustavoalmeida@gmail.com" ref={email} />
            {verificaEmail &&
              <p className="text-verdeTokSeg">{verificaEmail}</p>
            }
          </div>
          <div className="flex flex-col">
            <label htmlFor="telefone">Telefone para contato * </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="tel" id="telefone" name="telefone" placeholder="DDD + Telefone" ref={telefone} />
            {verificaTel &&
              <p className="text-verdeTokSeg">{verificaTel}</p>
            }
          </div>
          <div className="flex flex-col">
            <label htmlFor="cidade">Cidade * </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="text" id="cidade" name="cidade" ref={cidade} />
            {verificaCidade &&
              <p className="text-verdeTokSeg">{verificaCidade}</p>
            }
          </div>
          <div className="flex flex-col">
            <label htmlFor="endereco">Endereço </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="text" id="endereco" name="endereco" ref={endereco}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="funcao">No condomínio você é:</label>
            <select className="select select-success w-full bg-white text-pretoTokSeg" id="funcao" name="funcao" ref={funcao}>
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
            <label htmlFor="problema">Qual problema você quer resolver? *</label>
            <select className="bg-white select select-success w-full text-pretoTokSeg" id="problema" name="problema" ref={problema} required>
              <option value="Selecione">Selecione</option>
              <option value="quero-reduzir-custos">Quero reduzir custos</option>
              <option value="quero-mais-tecnologia">Quero mais tecnologia</option>
              <option value="Quero-saber-mais-sobre-a-TokSeg">Quero saber mais sobre a TokSeg</option>
            </select>
            {verificaProblema &&
               <p className="text-verdeTokSeg">{verificaProblema}</p>
            }
          </div>
          <div className="space-x-2">
            <input className="bg-white" type="radio" name="termos" id="termos" ref={aceito} />
            <label htmlFor="termos">
              Concordo em receber comunicações de marketing como newsletters e novidades TokSeg Group.
              Ao clicar no botão abaixo você concorda com a Política de Privacidade*.
            </label>
          </div>
          <button
            type="submit"
            className=" btn btn-success border-none rounded-full text-white text-center py-2 px-4"
            onClick={handleSubmit}
          >
            Solicitar Contato
          </button>
        </div>
          
      </form>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box bg-white text-verdeTokSeg  flex flex-col justify-center items-center space-y-8">
            <h3 className="font-bold text-4xl text-center">Email enviado com sucesso!</h3>
            <img src={aviao} alt="email-enviado" title="email-enviado" className="w-24"/>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
    </div>
  )
}