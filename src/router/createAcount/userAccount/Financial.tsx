const Financial = () => {
  return (
    <div>
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
      <input
          type="text"
          name="objetivoInvestimento"
          placeholder="Objetivo Investimento"
          className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
        />

      <input
          type="text"
          name="conhecimentoInvestimento"
          placeholder="Conhecimento de Investimento"
          className="flex-1 p-3 border border-cyan-400 focus:border-cyan-600 outline-none rounded-md"
        />
      </div>
    </div>
  )
}

export default Financial