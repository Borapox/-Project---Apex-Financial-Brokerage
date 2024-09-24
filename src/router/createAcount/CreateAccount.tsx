import { X } from 'lucide-react';  // Importa o ícone "X" para fechar o modal
import React, { useState } from 'react';  // Importa React e o hook useState para gerenciar o estado
import { SiExpertsexchange } from 'react-icons/si';  // Importa o ícone do react-icons

import BtnCreateAccount from './btn/BtnCreateAccount';  // Importa o componente de botão personalizado
import UserInfo from './userAccount/UserInfo';  // Importa o componente que contém informações pessoais do usuário
import TermsAndConditions from './userAccount/TermsAndConditions';  // Importa o componente de termos e condições
import AdressInfo from './userAccount/AdressInfo';  // Importa o componente com informações de endereço
import Financial from './userAccount/Financial';  // Importa o componente com informações financeiras

// URL da API para criação de usuários
const url = "http://localhost:3000/users";

// Define a tipagem para as props do componente CreateAccount
interface CreateAccountProps {
  onClose: () => void;  // Função para fechar o modal
}

const CreateAccount: React.FC<CreateAccountProps> = ({ onClose }) => {
  const [step, setStep] = useState(0);  // Estado para controlar a etapa atual do formulário
  
  const [userData, setUserData] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    rg: "",
    orgaoExpeditor: "",
    genero: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    senha: ""
  });

  const [adressData, setAdressData] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ddd: "",
  });

  const [financialData, setFinancialData] = useState({
    rendaMensal: "",
    profissao: "",
    objetivoInvestimento: "",
    conhecimentoInvestimento: "",
    banco: "",
    agencia: "",
    conta: ""
  });

  // Função para enviar os dados do usuário para a API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();  // Previne o comportamento padrão do formulário

    const userToSubmit = {
      ...userData,
      cpf: Number(userData.cpf),  // Converte CPF para número
      rg: Number(userData.rg),  // Converte RG para número
      dataNascimento: new Date(userData.dataNascimento),  // Converte data de nascimento para objeto Date
      telefone: Number(userData.telefone),  // Converte telefone para número

      rendaMensal: Number(financialData.rendaMensal),
      profissao: String(financialData.profissao),
      objetivoInvestimento: String(financialData.objetivoInvestimento),
      conhecimentoInvestimento: String(financialData.conhecimentoInvestimento),
      banco: Number(financialData.banco),
      agencia: Number(financialData.agencia),
      conta: Number(financialData.conta),
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userToSubmit)
      });

      if (!res.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const result = await res.json();
      console.log("Usuário cadastrado com sucesso:", result);

      // Limpa os dados do usuário após o cadastro
      setUserData({
        nome: "",
        sobrenome: "",
        cpf: "",
        rg: "",
        orgaoExpeditor: "",
        genero: "",
        dataNascimento: "",
        telefone: "",
        email: "",
        senha: ""
      });

      setFinancialData({
        rendaMensal: "",
        profissao: "",
        objetivoInvestimento: "",
        conhecimentoInvestimento: "",
        banco: "",
        agencia: "",
        conta: ""
      });
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  // Função para renderizar o componente apropriado baseado na etapa atual
  const renderStep = () => {
    switch (step) {
      case 0:
        return <UserInfo userData={userData} setUserData={setUserData} />;
      case 1:
        return <AdressInfo adressData={adressData} setAdressData={setAdressData} />;
      case 2:
        return <Financial financialData={financialData} setFinancialData={setFinancialData} />;
      case 3:
        return <TermsAndConditions />;
      default:
        return <UserInfo userData={userData} setUserData={setUserData} />;
    }
  };

  return (
    <div className='w-screen h-screen bg-gray-600 bg-opacity-40 flex justify-center items-center'>
      <div className="bg-cyan-600 p-5 rounded-md w-[1020px] h-[600px] shadow-2xl shadow-gray-700 flex flex-col items-center">
        <div className='flex items-center justify-between w-full'>
          <div className='m-auto'>
            <div className='flex justify-center items-center'>
              <div className="text-5xl flex gap-5 mb-10 ml-11">
                <SiExpertsexchange /> {/* Ícone do título */}
                <span>Cadastrar Usuário</span>
              </div>
            </div>
          </div>
          <div className="flex mb-10">
            <button className='cursor-pointer' onClick={onClose}>
              <X className='text-black hover:text-lime-500 transition duration-300 size-7' /> {/* Botão de fechar */}
            </button>
          </div>
        </div>

        {/* Botões de navegação entre as etapas */}
        <div className='flex gap-5 mb-5'>
          <BtnCreateAccount titleBtn={"Dados Pessoais"} onClick={() => setStep(0)} />
          <BtnCreateAccount titleBtn={"Endereço"} onClick={() => setStep(1)} />
          <BtnCreateAccount titleBtn={"Financeiro"} onClick={() => setStep(2)} />
          <BtnCreateAccount titleBtn={"Termos e Condições"} onClick={() => setStep(3)} />
        </div>

        <hr className='size-1 m-5 w-[900px] shadow-md shadow-gray-900' />

        <div className='h-[450px] w-[900px] m-auto flex flex-col justify-between'>
          {renderStep()}
          <div className='flex justify-between'>
            <BtnCreateAccount titleBtn={'Anterior'} onClick={() => setStep(step - 1)} />
            <BtnCreateAccount titleBtn={'Avançar'} onClick={() => setStep(step + 1)} />
            <BtnCreateAccount titleBtn={'Concluir Cadastro'} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;  // Exporta o componente para uso em outros lugares
