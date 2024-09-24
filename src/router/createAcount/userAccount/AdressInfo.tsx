import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";  // Importa o ícone de busca

import api from "../../../services/viaCep.ts";  // Importa o serviço configurado da API ViaCEP para busca de CEP

// Define a interface para as propriedades do endereço retornadas pela API ViaCEP
interface AdressData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ddd: string;
}

// Interface das propriedades que o componente 'AdressInfo' espera receber
interface AdressInfoProps {
  adressData: AdressData;  // Estado que contém os dados do endereço
  setAdressData: (data: AdressData) => void;  // Função para atualizar o estado do endereço
}

// Componente funcional 'AdressInfo'
const AdressInfo: React.FC<AdressInfoProps> = ( { adressData, setAdressData } ) => {
  const [input, setInput] = useState('');  // Estado para armazenar o valor digitado no campo de input
  const [cep, setCep] = useState<AdressData | null>(null);  // Estado para armazenar os dados de CEP retornados pela API

  // Função responsável por realizar a busca do CEP na API
  async function handleSearch() {
    if (input === "") {  // Verifica se o campo de busca está vazio
      alert("Preencha com um CEP!");  // Exibe um alerta caso o campo esteja vazio
      return;  // Interrompe a execução da função
    }

    try {
      const response = await api.get(`${input}/json`);  // Faz a requisição para a API ViaCEP com o CEP digitado
      setCep(response.data);  // Atualiza o estado 'cep' com os dados retornados pela API
      setInput('');  // Limpa o campo de input após a busca
    } catch {
      alert('Ops! Erro ao buscar');  // Exibe uma mensagem de erro caso a requisição falhe
      setInput('');  // Limpa o campo de input após o erro
    }
  }

  return (
    <div className="p-4">
      {/* Campo de busca de CEP com botão de busca */}
      <div className="flex gap-4 mb-5">
        <input
          type="text"
          name="cep"
          value={input}  // Valor do input controlado pelo estado 'input'
          placeholder="Buscar CEP"
          className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
          onChange={(e) => setAdressData({...adressData, cep: e.target.value })}  // Atualiza o estado 'adressData' com o valor digitado
        />
        <button 
          className="w-11 flex items-center justify-center bg-cyan-500 active:bg-cyan-700 transition duration-200 rounded-md" 
          onClick={handleSearch}  // Chama a função de busca ao clicar no botão
        >
          <IoIosSearch className="text-white size-6" />  {/* Ícone de busca */}
        </button>
      </div>

      {/* Renderiza os dados do CEP apenas se 'cep' estiver preenchido */}
      {cep && (
        <main className='flex flex-col gap-2'>
          {/* Exibe as informações do CEP */}
          <div className="flex space-x-4">
            <div className="p-3 border bg-white border-cyan-400 rounded-md shadow-md flex-1 flex items-center">
              <p className="font-bold text-md text-cyan-600 uppercase">CEP:</p>
              <div className="font-semibold text-gray-800 ml-2">{cep.cep}</div>
            </div>

            <div className="p-3 border bg-white border-cyan-400 rounded-md shadow-md flex-1 flex items-center">
              <p className="font-bold text-md text-cyan-600 uppercase">DDD:</p>
              <div className="font-semibold text-gray-800 ml-2">{cep.ddd}</div>
            </div>
          </div>

          {/* Exibe logradouro e bairro */}
          <div className="flex space-x-4">
            <div className="p-3 border bg-white border-cyan-400 rounded-md shadow-md flex-1 flex items-center">
              <p className="font-bold text-md text-cyan-600 uppercase">Logradouro:</p>
              <div className="font-semibold text-gray-800 ml-2">{cep.logradouro}</div>
            </div>

            <div className="p-3 border bg-white border-cyan-400 rounded-md shadow-md flex-1 flex items-center">
              <p className="font-bold text-md text-cyan-600 uppercase">Bairro:</p>
              <div className="font-semibold text-gray-800 ml-2">{cep.bairro}</div>
            </div>

            <div className="p-3 border bg-white border-cyan-400 rounded-md shadow-md flex-1 flex items-center">
              <p className="font-bold text-md text-cyan-600 uppercase">Complemento:</p>
              <div className="font-semibold text-gray-800 ml-2">{cep.complemento || 'N/A'}</div>  {/* Mostra 'N/A' caso não haja complemento */}
            </div>
          </div>

          {/* Exibe cidade e estado */}
          <div className="flex space-x-4">
            <div className="p-3 border bg-white border-cyan-400 rounded-md shadow-md flex-1 flex items-center">
              <p className="font-bold text-md text-cyan-600 uppercase">Cidade:</p>
              <div className="font-semibold text-gray-800 ml-2">{cep.localidade}</div>
            </div>

            <div className="p-3 border bg-white border-cyan-400 rounded-md shadow-md flex-1 flex items-center">
              <p className="font-bold text-md text-cyan-600 uppercase">Estado:</p>
              <div className="font-semibold text-gray-800 ml-2">{cep.uf}</div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default AdressInfo;
