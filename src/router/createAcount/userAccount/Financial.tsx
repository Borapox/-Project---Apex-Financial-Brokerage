const Financial = () => {
  return (
    <div>
      <form className="flex flex-col gap-4">
          <div className="flex gap-4">
              <input
                type="numer"
                name="rendaMensal"
                placeholder="Renda Mensal"
                className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
                required
              />
              <input
                type="text"
                name="profissao"
                placeholder="Profissão"
                className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
              />
          </div>

          <div className="flex gap-4">
          <label className=" flex items-center pl-3 pr-3 justify-between border bg-white text-gray-400 border-cyan-400 focus:border-cyan-600 outline-none rounded-md flex-1">
                  Objetivo de Investimento
                  <select  
                    className="outline-none p-2 w-[220px] rounded-sm text-cyan-800"
                    required
                  >
                    <option>Selecione</option>

                    <option value={'aumentoPatrimonio'}>
                      Aumento de Patrimônio
                    </option>
                    <option value={'educacaoFilhos'}>
                      Educação dos Filhos
                    </option>
                    <option value={'fundoEmergencial'}>
                      Fundo Emergencial
                    </option>
                    <option value={'liberdadeFinanceira'}>
                      Liberdade Financeira
                    </option>
                    <option value={'aposentadoria'}>
                      Aposentadoria
                    </option>
                    <option value={'compraImovel'}>
                      Compra de Imóvel
                    </option>
                    <option value={'viagem'}>
                      Viagem
                    </option>
                    <option value={'investimentosDiversificados'}>
                      Investimentos Diversificados
                    </option>
                    <option value={'pagamentoDividas'}>
                      Pagamento de Dívidas
                    </option>
                    <option value={'planejamentoFinanceiro'}>
                      Planejamento Financeiro
                    </option>



                  </select>

                </label>

                <label className=" flex items-center p-3 justify-between bg-white text-gray-400 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md ">
                  Conhecimento de Investimento
                  <select  
                    className="outline-none w-[180px] ml-4 rounded-sm text-cyan-800"
                    required
                  >
                    <option>Selecione</option>
                    <option value={'nenhum'}>
                      Nenhum Conhecimento
                    </option>
                    <option value={'basico'}>
                      Básico
                    </option>
                    <option value={'iniciante'}>
                      Iniciante
                    </option>
                    <option value={'moderado'}>
                      Moderado
                    </option>
                    <option value={'intermediario'}>
                      Intermediário
                    </option>
                    <option value={'avancado'}>
                      Avançado
                    </option>
                    <option value={'profissional'}>
                      Profissional
                    </option>
                    <option value={'especialista'}>
                      Especialista
                    </option>
                    <option value={'autodidata'}>
                      Autodidata
                    </option>
                    <option value={'consultor'}>
                      Consultor Financeiro
                    </option>

                  </select>

                </label>
              </div>

              <div className="flex gap-4">
              <input
                type="text"
                name="banco"
                placeholder="Banco"
                className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
                required
              />

              <input
                type="numer"
                name="agencia"
                placeholder="Agência"
                className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
                required
              />

              <input
                type="text"
                name="conta"
                placeholder="Conta Bancária"
                className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
              />
          </div>  
      </form>
    </div>
  )
}

export default Financial