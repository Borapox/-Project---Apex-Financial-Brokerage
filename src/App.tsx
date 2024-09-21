import { SiExpertsexchange } from "react-icons/si";  
import { MdOutlineEmail } from "react-icons/md";  
import { RiLockPasswordLine } from "react-icons/ri";  

import { Link } from "react-router-dom";  
import { useState } from "react";  

import CreateAccount from "./router/createAcount/CreateAccount";  
import InfoCard from "./components/info-card/InfoCard";
import ForgotYourPassword from "./router/createAcount/ForgotYourPassword";


export default function App() {
  const [createAccount, setCreateAccount] = useState(false);

  const createAccountModalOn = () => {
    setCreateAccount(true);
  };

  const createAccountModalOff = () => {
    setCreateAccount(false);
  };

  const [forgotPassword, setForgotPassword] = useState(false);
  
  const forgotPasswordOn = () => {
    setForgotPassword(true)
  }
  const forgotPasswordFalse = () => {
    setForgotPassword(false)
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-gray-400 to-gray-200">
      {/* Lado esquerdo com a logo da empresa */}
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-col justify-center items-center bg-gradient-to-t from-cyan-700 to-cyan-500 h-full w-96">
          <div className="text-5xl flex gap-2">
            <SiExpertsexchange />
            <span>Apex Brokers</span>
          </div>

          <div>
            <p className="text-xl mt-5 text-justify text-gray-700 bg-gray-300 bg-opacity-85 w-[600px] p-5 shadow-xl">
              Invista com segurança e confiança no futuro que você deseja construir. 
              Na nossa corretora, oferecemos as melhores oportunidades para transformar 
              suas aspirações financeiras em realidade. Com expertise e inovação, 
              guiamos você em cada passo, assegurando que suas decisões sejam fundamentadas e eficazes. 
              Junte-se a nós e descubra como alcançar seus objetivos no mercado de valores.
            </p>
          </div>
        </div>
      </div>

      {/* Lado direito com o formulário de login */}
      <div className="flex justify-center items-center bg-gradient-to-l from-gray-400 h-full w-full">
        <div className="flex flex-col justify-between items-center bg-[#17374d] h-full w-[600px] shadow-2xl">

          {/* Menu superior com links para diferentes seções */}
          <div className="w-full flex justify-evenly gap-5 uppercase text-sm mt-4 text-gray-400 font-bold">
            <Link 
              to="/central" 
              className="hover:text-cyan-700"
            >
              Central de Atendimento
            </Link>
            <Link 
              to="/servicos" 
              className="hover:text-cyan-700"
            >
              Serviços e Produtos
            </Link>
            <Link 
              to="/analise" 
              className="hover:text-cyan-700"
            >
              Análises de Mercado
            </Link>
          </div>

          {/* Conteúdo principal com formulário de login */}
          
            <div className="h-96 flex flex-col w-[500px] mt-[200px]">
                  <div className="bg-cyan-100 bg-opacity-40 p-5 rounded-md shadow-md flex flex-col items-center ">
                    
                    <div className="flex items-center flex-col">
                      <form action="" className="flex flex-col gap-5">
                        <div className="relative">
                          <MdOutlineEmail 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" 
                          />
                          <input 
                            type="email" 
                            placeholder="E-Mail"
                            className="
                              outline-none 
                              p-2 
                              w-96 
                              rounded-sm 
                              text-cyan-800 
                              text-center 
                              text-xl"
                            required
                          />
                        </div>

                        <div className="relative">
                          <RiLockPasswordLine 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" 
                          />
                          <input 
                            type="password"
                            placeholder="Senha"
                            className="
                              outline-none 
                              p-2 
                              w-96 
                              rounded-sm 
                              flex-1 
                              text-cyan-800 
                              text-center 
                              text-xl"
                            required
                          />
                        </div>
                      </form>

                      <Link to={"/"}>
                        <p className="
                          font-bold 
                          text-cyan-900 
                          my-2 
                          hover:text-gray-300"
                          onClick={forgotPasswordOn}>
                          Esqueceu sua senha?
                        </p>
                      </Link>

                      <Link to="/home">
                        <button 
                          className="
                            border-cyan-800 
                            bg-[#17374d] 
                            text-gray-300 
                            rounded- 
                            w-44 
                            h-8 
                            p-5 
                            flex 
                            justify-center 
                            items-center 
                            hover:bg-cyan-800 
                            active:bg-cyan-900 
                            transition 
                            duration-300">
                          Entrar
                        </button>
                      </Link>

                      <div className="w-full bg-white h-10 flex justify-center items-center m-5">
                        <p className="text-red-600 italic">Espaço destinado para login via Google / Facebook</p>
                      </div>
                    </div>

                    <button 
                      className="
                        text-3xl 
                        flex 
                        gap-2 
                        font-mulish 
                        text-white 
                        cursor-pointer
                        active:text-cyan-300
                        transition
                        duration-300
                        " 
                      onClick={createAccountModalOn}>
                      Cresça Seu Capital!
                    </button>
                    
                  </div>
            </div>

                  <div className="flex justify-center items-center gap-5 mr-[400px] mb-8">
                    <InfoCard />
                    <InfoCard />
                    <InfoCard />
                  </div>
        </div>

      </div>


      {/* Seção do modal de criação de conta, que só aparece se createAccount for true */}
      <div className='z-70 absolute'>
        {createAccount && (
          <CreateAccount 
            onClose={createAccountModalOff}  
          />
        )}

        {forgotPassword && (
          <ForgotYourPassword 
          onClose={forgotPasswordFalse}
          />
            
        )

        }
      </div>
    </div>
  );
}
