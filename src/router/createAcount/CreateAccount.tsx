import { X } from 'lucide-react';  // Importa o ícone "X" da biblioteca lucide-react para ser usado como botão de fechamento
import React, { useState } from 'react';
import { SiExpertsexchange } from 'react-icons/si';  // Importa o ícone "SiExpertsexchange" da biblioteca react-icons
import BtnCreateAccount from './btn/BtnCreateAccount';  // Importa o componente de botão de criação de conta
import UserInfo from './userAccount/UserInfo';  // Importa o componente que exibe informações do usuário
import TermsAndConditions from './userAccount/TermsAndConditions';  // Importa o componente que exibe termos e condições
import AdressInfo from './userAccount/AdressInfo';
import Financial from './userAccount/Financial';

// Define a tipagem para as props do componente CreateAccount
interface CreateAccountProps {
  onClose: () => void; // Função para fechar o modal, recebida como prop
}

// Define o componente funcional CreateAccount
const CreateAccount: React.FC<CreateAccountProps> = ({ onClose }) => {

  // Estado para controlar a exibição das informações do usuário
  const [userInfo, setUserInfo] = useState(false);

  // Função para exibir as informações do usuário e esconder termos e condições
  const userHandle = () => {
    setUserInfo(true);
    
    setAdressInfo(false);
    setFinancialInfo(false);
    setTermsInfo(false);  // Garante que os termos e condições não sejam exibidos
  };


  const [adressInfo, setAdressInfo] = useState(false);

  const adressHandle = () => {
    setAdressInfo(true);
    
    setUserInfo(false);
    setFinancialInfo(false);
    setTermsInfo(false);
  };

  const [financialInfo, setFinancialInfo] = useState(false);

  const financialHandle = () => {
    setFinancialInfo(true);

    setUserInfo(false);
    setAdressInfo(false);
    setTermsInfo(false);
  }
  // Estado para controlar a exibição dos termos e condições
  const [termsInfo, setTermsInfo] = useState(false);

  // Função para exibir os termos e condições e esconder informações do usuário
  const termsHandle = () => {
    setTermsInfo(true);

    setAdressInfo(false);
    setFinancialInfo(false);
    setUserInfo(false);  // Garante que as informações do usuário não sejam exibidas
  };

  return (
    // O contêiner principal do modal, ocupando toda a tela com fundo semitransparente escuro
    <div className='w-screen h-screen bg-gray-600 bg-opacity-40 flex justify-center items-center'> 

      {/* O modal em si, com fundo branco, bordas arredondadas e tamanho definido */}
      <div className="bg-cyan-600 p-5 rounded-md w-[1020px] h-[600px] shadow-2xl shadow-gray-700 flex flex-col items-center">
          
          {/* Seção do cabeçalho do modal com botão de fechar no canto superior direito */}
          <div className='flex items-center justify-between w-full'>
                  
              <div className='m-auto'>
              <div className='flex justify-center items-center'>
                              {/* Seção de título com ícone e texto */}
                              <div className="text-5xl flex gap-5 mb-10 ml-11">
                                <SiExpertsexchange />  {/* Ícone do título */}
                                <span>Cadastrar Usuário</span>  {/* Texto do título */}
                              </div>          
                            </div>
              </div>
              
              <div className="flex mb-10">
                <button className='cursor-pointer' onClick={onClose}>
                  {/* Ícone "X" que serve como botão para fechar o modal */}
                  <X className='text-black hover:text-lime-500 transition duration-300 size-7'/>
                </button> 
              </div>
              
          </div>

          <div className='flex gap-5 mb-5'>
            
            {/* Botões de navegação para diferentes seções do modal */}
            <BtnCreateAccount titleBtn={"Dados Pessoais"} onClick={userHandle} />
            <BtnCreateAccount titleBtn={"Endereço"} onClick={adressHandle}/>
            <BtnCreateAccount titleBtn={"Financeiro"} onClick={financialHandle}/>
            <BtnCreateAccount titleBtn={"Termos e Condições"} onClick={termsHandle}/> 

          </div>

          <hr className='size-1 m-5 w-[900px] shadow-md shadow-gray-900'/>

          <div className='h-[450px] w-[900px] m-auto flex flex-col justify-between'>

              {/* Condicional para exibir o componente de informações do usuário */}
              {userInfo && 
                <UserInfo />
              }
              {adressInfo && 
                <AdressInfo />
              }
              {financialInfo &&
                <Financial />
              }
              {/* Condicional para exibir o componente de termos e condições */}
              {termsInfo && 
                <TermsAndConditions />
              }

              <div className='flex justify-between'>
                {/* Botões de navegação adicionais (comentados por enquanto) */}
                {/* <BtnCreateAccount titleBtn={'Anterior'} />
                <BtnCreateAccount titleBtn={'Avançar'} /> */}
                  
              </div>

          </div>
   
      </div>

    </div>
  );
};

export default CreateAccount;  // Exporta o componente para ser utilizado em outras partes da aplicação
