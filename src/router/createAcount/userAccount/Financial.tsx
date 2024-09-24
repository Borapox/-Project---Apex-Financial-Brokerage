import React from "react";

// Define a interface com as propriedades esperadas do formulário financeiro
interface FinancialData {
  rendaMensal: string;
  profissao: string;
  objetivoInvestimento: string;
  conhecimentoInvestimento: string;
  banco: string;
  agencia: string;
  conta: string;
}

// Interface para as props do componente, que inclui os dados financeiros e a função de atualização
interface FinancialProps {
  financialData: FinancialData;
  setFinancialData: (data: FinancialData) => void;
}

// Componente funcional que exibe e manipula o formulário de dados financeiros
const Financial: React.FC<FinancialProps> = ({ financialData, setFinancialData }) => {
  return (
    <div>
      {/* Formulário para coleta de dados financeiros */}
      <form className="flex flex-col gap-4">
        
        {/* Seção para renda mensal e profissão */}
        <div className="flex gap-4">
          <input
            type="number"  // Campo de entrada para renda mensal
            name="rendaMensal"
            placeholder="Renda Mensal"
            value={financialData.rendaMensal}  // Valor controlado pelo estado 'financialData'
            onChange={(e) => setFinancialData({ ...financialData, rendaMensal: e.target.value })}  // Atualiza o estado quando o valor é alterado
            className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
            required  // Campo obrigatório
          />
          
          <input
            type="text"  // Campo de entrada para profissão
            name="profissao"
            placeholder="Profissão"
            value={financialData.profissao}  // Valor controlado pelo estado 'financialData'
            onChange={(e) => setFinancialData({ ...financialData, profissao: e.target.value })}  // Atualiza o estado quando o valor é alterado
            className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
          />
        </div>

        {/* Seção para objetivo de investimento e nível de conhecimento de investimento */}
        <div className="flex gap-4">
          
          {/* Campo select para o objetivo de investimento */}
          <label className="flex items-center pl-3 pr-3 justify-between border bg-white text-gray-400 border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1">
            Objetivo de Investimento
            <select  
              className="outline-none p-2 w-[220px] rounded-sm text-cyan-800"
              name="objetivoInvestimento"
              value={financialData.objetivoInvestimento}  // Valor controlado pelo estado 'financialData'
              onChange={(e) => setFinancialData({ ...financialData, objetivoInvestimento: e.target.value })}  // Atualiza o estado quando o valor é alterado
              required  // Campo obrigatório
            >
              <option>Selecione</option>  {/* Opções do select */}
              <option value="aumentoPatrimonio">Aumento de Patrimônio</option>
              <option value="educacaoFilhos">Educação dos Filhos</option>
              <option value="fundoEmergencial">Fundo Emergencial</option>
              <option value="liberdadeFinanceira">Liberdade Financeira</option>
              <option value="aposentadoria">Aposentadoria</option>
              <option value="compraImovel">Compra de Imóvel</option>
              <option value="viagem">Viagem</option>
              <option value="investimentosDiversificados">Investimentos Diversificados</option>
              <option value="pagamentoDividas">Pagamento de Dívidas</option>
              <option value="planejamentoFinanceiro">Planejamento Financeiro</option>
            </select>
          </label>

          {/* Campo select para nível de conhecimento de investimento */}
          <label className="flex items-center p-3 justify-between bg-white text-gray-400 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md">
            Conhecimento de Investimento
            <select  
              className="outline-none w-[180px] ml-4 rounded-sm text-cyan-800"
              name="conhecimentoInvestimento"
              value={financialData.conhecimentoInvestimento}  // Valor controlado pelo estado 'financialData'
              onChange={(e) => setFinancialData({ ...financialData, conhecimentoInvestimento: e.target.value })}  // Atualiza o estado quando o valor é alterado
              required  // Campo obrigatório
            >
              <option>Selecione</option>  {/* Opções do select */}
              <option value="nenhum">Nenhum Conhecimento</option>
              <option value="basico">Básico</option>
              <option value="iniciante">Iniciante</option>
              <option value="moderado">Moderado</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
              <option value="profissional">Profissional</option>
              <option value="especialista">Especialista</option>
              <option value="autodidata">Autodidata</option>
              <option value="consultor">Consultor Financeiro</option>
            </select>
          </label>
        </div>

        {/* Seção para informações bancárias */}
        <div className="flex gap-4">
          <input
            type="text"  // Campo de entrada para o nome do banco
            name="banco"
            placeholder="Banco"
            value={financialData.banco}  // Valor controlado pelo estado 'financialData'
            onChange={(e) => setFinancialData({ ...financialData, banco: e.target.value })}  // Atualiza o estado quando o valor é alterado
            className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
            required  // Campo obrigatório
          />

          <input
            type="number"  // Campo de entrada para agência bancária
            name="agencia"
            placeholder="Agência"
            value={financialData.agencia}  // Valor controlado pelo estado 'financialData'
            onChange={(e) => setFinancialData({ ...financialData, agencia: e.target.value })}  // Atualiza o estado quando o valor é alterado
            className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
            required  // Campo obrigatório
          />

          <input
            type="text"  // Campo de entrada para conta bancária
            name="conta"
            placeholder="Conta Bancária"
            value={financialData.conta}  // Valor controlado pelo estado 'financialData'
            onChange={(e) => setFinancialData({ ...financialData, conta: e.target.value })}  // Atualiza o estado quando o valor é alterado
            className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
          />
        </div>
      </form>
    </div>
  );
}

export default Financial;
