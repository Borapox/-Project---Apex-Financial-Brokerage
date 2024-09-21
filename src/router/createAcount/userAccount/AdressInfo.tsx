import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import api from "../../../services/viaCep.ts";  // Importa o serviço configurado da API ViaCEP.

// Define a interface com as propriedades esperadas do retorno da API
interface CepData {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ddd: string;
}

const AdressInfo = () => {
  // Atualiza o estado 'cep' para usar o tipo 'CepData', ou seja, um objeto com as propriedades definidas
  const [input, setInput] = useState('');
  const [cep, setCep] = useState<CepData | null>(null);  // Pode ser 'null' no início, antes de buscar os dados

  async function handleSearch() {
    if (input === "") {
      alert("Preencha com um CEP!");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);  // Atualiza 'cep' com os dados retornados pela API
      setInput('');  // Limpa o campo de input após a busca
    } catch {
      alert('Ops! Erro ao buscar');
      setInput('');
    }
  }

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-5">
        <input
          type="text"
          name="cep"
          value={input}
          placeholder="Buscar CEP"
          className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="w-11 flex items-center justify-center bg-cyan-500 active:bg-cyan-700 transition duration-200 rounded-md" onClick={handleSearch}>
          <IoIosSearch className="text-white size-6" />
        </button>
      </div>

      {/* Verifica se 'cep' existe antes de renderizar os dados */}
      {cep && (
        <main className='flex flex-col gap-2'>
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
              <div className="font-semibold text-gray-800 ml-2">{cep.complemento || 'N/A'}</div>
            </div>
          </div>

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
