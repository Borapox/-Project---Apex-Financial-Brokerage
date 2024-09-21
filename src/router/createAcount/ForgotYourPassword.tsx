import { X } from "lucide-react";
import React from "react"
import { SiExpertsexchange } from "react-icons/si";
interface ForgotYourPassword {
  onClose : () => void;
}

const ForgotYourPassword: React.FC<ForgotYourPassword>  = ( {onClose} ) => {
  return (
    <div className='w-screen h-screen bg-gray-600 bg-opacity-40 flex justify-center items-center transition duration-500'> 
        
        <div className="bg-cyan-600 p-5 rounded-md w-[1020px] h-[600px] shadow-2xl shadow-gray-700 flex flex-col items-center">
              
              <div className="flex items-center justify-between w-full">
                <div className='m-auto'>
                    {/* Seção de título com ícone e texto */}
                    <div className="text-5xl flex gap-5 mb-10 ml-11">
                      <SiExpertsexchange />  {/* Ícone do título */}
                      <span>Recuperar Senha</span>  {/* Texto do título */}
                    </div>
                </div>
             
             <div className="flex mb-10">
                <button className='cursor-pointer' onClick={onClose}>
                  <X className='text-black hover:text-lime-500 transition duration-300 size-7'/>  {/* Ícone "X" que serve como botão para fechar o modal */}
                </button> 
              </div>
              </div>
      </div>

      <form action="">

<input type="text" placeholder="Digite seu email" />

</form>

    </div>
  )
}

export default ForgotYourPassword