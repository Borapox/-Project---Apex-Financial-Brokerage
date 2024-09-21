import { X } from 'lucide-react';  // Importa o ícone "X" da biblioteca lucide-react, utilizado como botão de fechar
import React, { useState } from 'react';  // Importa React e o hook useState para gerenciar o estado
import { SiExpertsexchange } from 'react-icons/si';  // Importa o ícone "SiExpertsexchange" da biblioteca react-icons

import BtnCreateAccount from './btn/BtnCreateAccount';  // Importa o componente de botão personalizado para navegação entre etapas
import UserInfo from './userAccount/UserInfo';  // Importa o componente que contém informações pessoais do usuário
import TermsAndConditions from './userAccount/TermsAndConditions';  // Importa o componente de termos e condições
import AdressInfo from './userAccount/AdressInfo';  // Importa o componente com informações de endereço
import Financial from './userAccount/Financial';  // Importa o componente com informações financeiras

// Define a tipagem para as props do componente CreateAccount
interface CreateAccountProps {
  onClose: () => void;  // Recebe uma função passada como prop para fechar o modal
}

const CreateAccount: React.FC<CreateAccountProps> = ({ onClose }) => {

  // Define o estado da etapa do formulário, começando em 0 (primeira etapa)
  const [step, setStep] = useState(0);

  // Função para avançar para a próxima etapa
  const nextStep = () => {
    if (step < 3) setStep(step + 1);  // Avança para a próxima etapa, até o limite de 3
  };

  // Função para voltar para a etapa anterior
  const prevStep = () => {
    if (step > 0) setStep(step - 1);  // Retorna para a etapa anterior, até o mínimo de 0
  };

  // Função para renderizar o componente apropriado baseado na etapa atual
  const renderStep = () => {
    switch (step) {
      case 0:
        return <UserInfo />;  // Retorna o componente de informações pessoais na etapa 0
      case 1:
        return <AdressInfo />;  // Retorna o componente de informações de endereço na etapa 1
      case 2:
        return <Financial />;  // Retorna o componente de informações financeiras na etapa 2
      case 3:
        return <TermsAndConditions />;  // Retorna o componente de termos e condições na etapa 3
      default:
        return <UserInfo />;  // Por padrão, retorna o componente de informações pessoais
    }
  };

  return (
    // Container principal que ocupa toda a tela, com fundo semitransparente e conteúdo centralizado
    <div className='w-screen h-screen bg-gray-600 bg-opacity-40 flex justify-center items-center'>
      
      {/* Container do modal, com fundo ciano, bordas arredondadas e sombra */}
      <div className="bg-cyan-600 p-5 rounded-md w-[1020px] h-[600px] shadow-2xl shadow-gray-700 flex flex-col items-center">
        
        {/* Cabeçalho do modal */}
        <div className='flex items-center justify-between w-full'>
          
          {/* Título do modal centralizado */}
          <div className='m-auto'>
            <div className='flex justify-center items-center'>
              
              {/* Ícone e título do modal */}
              <div className="text-5xl flex gap-5 mb-10 ml-11">
                <SiExpertsexchange />  {/* Ícone da biblioteca react-icons */}
                <span>Cadastrar Usuário</span>  {/* Texto do título */}
              </div>
              
            </div>
          </div>

          {/* Botão de fechar o modal */}
          <div className="flex mb-10">
            <button className='cursor-pointer' onClick={onClose}>
              <X className='text-black hover:text-lime-500 transition duration-300 size-7'/>  {/* Ícone "X" com efeito hover */}
            </button> 
          </div>
          
        </div>

        {/* Botões de navegação entre as diferentes etapas */}
        <div className='flex gap-5 mb-5'>
          <BtnCreateAccount titleBtn={"Dados Pessoais"} onClick={() => setStep(0)} />  {/* Botão para etapa "Dados Pessoais" */}
          <BtnCreateAccount titleBtn={"Endereço"} onClick={() => setStep(1)}/>  {/* Botão para etapa "Endereço" */}
          <BtnCreateAccount titleBtn={"Financeiro"} onClick={() => setStep(2)}/>  {/* Botão para etapa "Financeiro" */}
          <BtnCreateAccount titleBtn={"Termos e Condições"} onClick={() => setStep(3)}/>  {/* Botão para etapa "Termos e Condições" */}
        </div>

        <hr className='size-1 m-5 w-[900px] shadow-md shadow-gray-900'/>  {/* Linha separadora */}

        {/* Conteúdo do modal */}
        <div className='h-[450px] w-[900px] m-auto flex flex-col justify-between'>
          
          {/* Renderiza o componente apropriado baseado na etapa atual */}
          {renderStep()}  

          {/* Botões de navegação para "Anterior" e "Avançar" */}
          <div className='flex justify-between'>
            <BtnCreateAccount titleBtn={'Anterior'} onClick={prevStep} />  {/* Botão para voltar uma etapa */}
            <BtnCreateAccount titleBtn={'Avançar'} onClick={nextStep}/>  {/* Botão para avançar uma etapa */}
          </div>

        </div>
   
      </div>
    
    </div>
  );
};

export default CreateAccount;  // Exporta o componente para uso em outros lugares
