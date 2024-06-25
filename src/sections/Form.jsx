import { useState, useRef } from "react";

export default function Form (){
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
  const cidade = useRef(null);
  const problema = useRef(null);

  const resetEmail = () =>{
    dialog.current.close()
    form.current.submit()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    checkEmail()
    checkNome()
    checkTel()
    checkCidade()
    
    if (checkEmail() && checkAssunto() && checkMensagem()) {
      dialog.current.showModal()
      setTimeout(resetEmail, 3000)

    }
  };


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
    nome.current.value == '' ? setVerificaNome('Campo obrigatório') : setVerificaNome(null)
  }
  const checkTel = () => {
    const phoneRegex =  /^(?:\+\d{2}\s?)?\(\d{2}\)\s?\d{4,5}-?\d{4}$/;
    console.log('foi')
  
    if (telefone.current.value === '') {
      setVerificaTel('Campo obrigatório');
      return false;
    } else if (phoneRegex.test(telefone.current.value)) {
      setVerificaTel(null);
      return true;
    } else {
      setVerificaTel('Telefone inválido');
      return false;
    }
  };
  const checkCidade = () => {
    cidade.current.value ? setVerificaCidade(null) : setVerificaCidade('Campo obrigatório')
  }
  const checkProblema = () => {
    problema.current.value ? setVerificaProblema(null) : setVerificaProblema('Campo obrigatório')
  }
  return(
    
    <div className="w-full bg-pretoTokSeg flex justify-center items-center py-12">
      <form className="flex flex-col items-center lg:flex-row w-full max-w-[1256px] px-10"
        ref={form}
      >
        <div className="space-y-12 flex flex-col lg:items-start items-center lg:w-1/2">
          <h1 className="text-5xl text-white font-bold text-verdeFosco">Monitoramento</h1>
          <p className="text-3xl lg:text-start text-center">Portaria TokSeg é o que seu empreendimento precisa: nem mais, nem menos do que o necessário.</p>
          <div className="w-4/5 space-y-2  divide-y">
            <div className="flex flex-row justify-center items-center py-2 ">
              <label htmlFor="lorem"  className="w-10/12 pr-2 text-3xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
              <input type="checkbox" className="toggle toggle-lg  checked:[--tglbg:#00a96e]  bg-verdeFosco hover:bg-verdeFosco" defaultChecked/>
            </div>
            <div className="flex flex-row justify-center items-center py-2 ">
              <label htmlFor="lorem2" className="w-10/12 pr-2 text-3xl font-bold ">Perferendis distinctio vitae eaque alias,</label>
              <input type="checkbox" className="toggle toggle-lg  checked:[--tglbg:#00a96e]  bg-verdeFosco hover:bg-verdeFosco" />
            </div>
            <div className="flex flex-row justify-center items-center py-2">
              <label htmlFor="lorem3"  className="w-10/12 pr-2 text-3xl font-bold"> eum autem eos necessitatibus dolor</label>
              <input type="checkbox" className="toggle toggle-lg  checked:[--tglbg:#00a96e]  bg-verdeFosco hover:bg-verdeFosco" />
              
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
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="text" id="nome" name="nome" required ref={nome}/>
            {verificaNome && 
              <p className="text-verdeTokSeg">{verificaNome}</p>
            }
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email * </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="email" id="email" name="email" placeholder="gustavoalmeida@gmail.com" required ref={email}/>
            { verificaEmail && 
              <p className="text-verdeTokSeg">{verificaEmail}</p>
            }
          </div>
          <div className="flex flex-col">
            <label htmlFor="telefone">Telefone para contato * </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="tel" id="telefone" name="telefone" placeholder="DDD + Telefone" ref={telefone}/>
            { verificaTel && 
              <p className="text-verdeTokSeg">{verificaTel}</p>
            }
          </div>
          <div className="flex flex-col">
            <label htmlFor="cidade">Cidade * </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="text" id="cidade" name="cidade" ref={cidade}/>
            { verificaCidade && 
              <p className="text-verdeTokSeg">{verificaCidade}</p>
            }
          </div>
          <div className="flex flex-col">
            <label htmlFor="endereco">Endereço </label>
            <input className="input input-bordered text-pretoTokSeg input-success w-full bg-white" type="text" id="endereco" name="endereco"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="funcao">No condomínio você é:</label>
            <select className="select select-success w-full bg-white text-pretoTokSeg" id="funcao" name="funcao">
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
              <option value="volvo">Selecione</option>
              <option value="quero-reduzir-custos">Quero reduzir custos</option>
              <option value="quero-mais-tecnologia">Quero mais tecnologia</option>
              <option value="Quero-saber-mais-sobre-a-TokSeg">Quero saber mais sobre a TokSeg</option>
            </select> 
          </div>
          <div className="space-x-2">
            <input className="bg-white" type="radio" name="termos" id="termos"/>
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
    </div>
  )
}