import { SiExpertsexchange } from "react-icons/si";  // Importa o ícone de uma biblioteca de ícones
import { Link } from "react-router-dom";  // Importa o componente Link para navegação entre páginas
import { useState } from "react";  // Importa o hook useState para gerenciar estados no componente
import CreateAccount from "./router/createAcount/CreateAccount";  // Importa o componente CreateAccount para o modal de criação de conta

export default function App() {

  // Estado que controla se o modal de criação de conta está aberto ou fechado
  const [createAccount, setCreateAccount] = useState(false)

  // Função para abrir o modal de criação de conta
  const createAccountModalOn  = () => {
    setCreateAccount(true)
  };

  // Função para fechar o modal de criação de conta
  const createAccountModalOff  = () => {
    setCreateAccount(false)
  };



  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-gray-400 to-gray-200">
      {/* Layout principal que ocupa a altura total da tela e possui um fundo em gradiente */}

      {/* Lado esquerdo com a logo da empresa */}
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-col justify-center items-center bg-gradient-to-t from-cyan-700 to-cyan-500 h-full w-96">
          <div className="text-5xl flex gap-2">
            {/* Ícone da empresa e nome */}
            <SiExpertsexchange />
            <span>Apex Brokers</span>
          </div>

          <div>
            {/* Texto descritivo sobre a corretora */}
            <p className="text-xl mt-5 text-justify text-gray-700 bg-gray-300 bg-opacity-85 w-[600px] p-5 shadow-xl">
              Invista com segurança e confiança no futuro que você deseja construir. Na nossa corretora, oferecemos as melhores oportunidades para transformar suas aspirações
              financeiras em realidade. Com expertise e inovação, guiamos você em cada passo, assegurando que suas decisões sejam fundamentadas e eficazes. Junte-se a nós e descubra
              como alcançar seus objetivos no mercado de valores.
            </p>
          </div>
        </div>
      </div>

      {/* Lado direito com o formulário de login */}
      <div className="flex justify-center items-center bg-gradient-to-l from-gray-400 h-full w-full">
        <div className="flex flex-col justify-between items-center bg-[#17374d] h-full w-[600px] shadow-2xl">

          {/* Menu superior com links para diferentes seções */}
          <div className="w-full flex justify-center gap-5 uppercase text-sm mt-4 text-gray-400 font-bold">
            <Link to="/" className="hover:text-cyan-700">Central de Atendimento</Link>
            <Link to="/" className="hover:text-cyan-700">Serviços e Produtos</Link>
            <Link to="/" className="hover:text-cyan-700">Análises de Mercado</Link>
          </div>

          {/* Conteúdo principal com formulário de login */}
          <div>

            {/* Formulário de login com campos de e-mail e senha */}
            <div className="h-96 flex flex-col w-[500px]">
              <div className="bg-cyan-100 bg-opacity-40 p-5 rounded-md shadow-md flex flex-col items-center justify-center">
                
                <div className="flex items-center justify-center flex-col">
                  <form action="" className="flex flex-col gap-5 mb-5">
                    <input 
                      type="email" 
                      placeholder="E-mail"
                      className="outline-none p-2 rounded-sm flex-1 text-cyan-800"
                    />
                    <input 
                      type="password"
                      placeholder="Senha"
                      className="outline-none p-2 w-72 rounded-sm flex-1 text-cyan-800"
                    />
                  </form>
                  {/* Botão de login */}
                  <Link to="/">
                    <button className="border-cyan-800 bg-[#17374d] text-gray-300 rounded-md w-36 h-8 p-5 flex justify-center items-center">
                      Entrar
                    </button>
                  </Link>
                </div>

                {/* Botão para abrir o modal de criação de conta */}
                <button className="text-3xl flex gap-2 font-bold font-mulish text-white hover:underline cursor-pointer" onClick={createAccountModalOn}>
                  Cresça Seu Capital!
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Seção do modal de criação de conta, que só aparece se createAccount for true */}
      <div className='z-70 absolute'>
        {createAccount && (
          <CreateAccount 
            onClose={createAccountModalOff}  // Passa a função de fechar o modal para o componente filho CreateAccount
          />
        )}
      </div>

    </div>
  );
}
